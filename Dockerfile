# ============================================
# Stage 1: 安装依赖
# ============================================
FROM node:18-alpine AS deps

WORKDIR /app

# 复制 package 文件
COPY package.json package-lock.json* ./

# 安装依赖
RUN npm ci

# ============================================
# Stage 2: 构建应用
# ============================================
FROM node:18-alpine AS builder

WORKDIR /app

# 复制 node_modules 和源代码
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 生成环境变量
ENV NEXT_TELEMETRY_DISABLED=1

# 构建应用
RUN npm run build

# ============================================
# Stage 3: 生产环境运行
# ============================================
FROM node:18-alpine AS runner

WORKDIR /app

# 设置 Node.js 环境
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 创建非 root 用户（安全）
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制 standalone 构建产物
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 切换到非 root 用户
USER nextjs

# 暴露端口
EXPOSE 3000

# 启动命令
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
