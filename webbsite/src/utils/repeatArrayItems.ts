export function repeatArrayItems<T>(arr: T[], count: number): T[] {
    const result: T[] = [];
    while (result.length < count) {
      const remainingItems = count - result.length;
      const itemsToAdd = arr.slice(0, remainingItems);
      result.push(...itemsToAdd);
    }
    return result;
  }