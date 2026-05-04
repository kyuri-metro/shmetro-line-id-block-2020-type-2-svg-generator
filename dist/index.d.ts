export type LineIdBlockProps = {
    background?: string;
    fontFamily?: string;
    foreground?: string;
    height?: number;
    lineNumber: string | number;
};
export declare const DEFAULT_LINE_ID_BLOCK_FONT_FAMILY = "Arial, Helvetica, sans-serif";
export declare function getLineIdBlockWidth(lineNumber: string | number, height?: number): number | null;
export declare function generateLineIdBlock2020Type2Svg({ background, fontFamily, foreground, height, lineNumber, }: LineIdBlockProps): string;
//# sourceMappingURL=index.d.ts.map