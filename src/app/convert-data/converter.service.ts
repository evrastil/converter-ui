interface Converter {
    convert(conversion: { conversionData: string }): string;
}

class ConvertService implements Converter {
    convert = (conversion: { conversionData: string }) => {
        const { conversionData } = conversion;
        return conversionData.split(',').reduce((res, piece) => {
            return res.concat(piece);
        }, ''
        );
    }
}
export { ConvertService };
