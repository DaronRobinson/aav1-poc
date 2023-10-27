

export function generateIncrementedId<T extends { id: number }>(items: T[]) {
  return (items.at(-1)?.id ?? 0) + 1
}