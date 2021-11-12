export class ArrayUtils {
    static removeEmptyKeys(obj: object | unknown) {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v));
    }
}
