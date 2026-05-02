# 上海地铁线路号方块 2020 Type 2 SVG Generator

[![TypeScript](https://img.shields.io/badge/TypeScript-Source%20Package-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](LICENSE)

> 以下内容为 GPT 5.4 生成，未经过人工检查，请谨慎对待

这是 kyuri-metro 组织下的 2020 type 2 版线路号方块 SVG 生成仓库，负责提供单一的纯函数导出接口。

2020 type 2 的定位是：它是后来确认出来的另一种“类似 2020”样式，推测比另一种样式出现时间更早一些，和通常所说的 2020 样式不是同一种样式，也不是其兼容适配版本。

## 示例图

待在 Umamichi.moe 更新介绍后，更新示例图。

统一参数规格：

- foreground
- background
- lineNumber，范围 0 至 99
- height

导出接口位于 [src/index.ts](src/index.ts)。

## 关于 20+ 线路

- 20 号线及以上当前参照 2025 项目的处理方式：除 x1 以外横向压缩为原字宽的 0.9 倍，x1 则略减小数字总宽度
- 上述 20+ 压缩规则没有现实依据，只是为了避免文字重叠而类比 2025 标准做的处理

## 使用例

安装：

```bash
npm install @kyuri-metro/shmetro-line-id-block-2020-type-2-svg-generator
```

调用：

```ts
import { generateLineIdBlock2020Type2Svg } from '@kyuri-metro/shmetro-line-id-block-2020-type-2-svg-generator'

const svg = generateLineIdBlock2020Type2Svg({
  lineNumber: 15,
  height: 160,
})

document.body.innerHTML = svg
```

自定义颜色：

```ts
import { generateLineIdBlock2020Type2Svg } from '@kyuri-metro/shmetro-line-id-block-2020-type-2-svg-generator'

const svg = generateLineIdBlock2020Type2Svg({
  lineNumber: 22,
  height: 120,
  background: '#5F67A9',
  foreground: '#ffffff',
})
```

## 参考资料

- 2020 type 2 版参考资料位于 [docs](docs)
- 该目录仅用于仓库留档和人工比对，不参与运行时代码引用
- 该目录已加入 [.npmignore](.npmignore)，不会随 npm 包一起下载
