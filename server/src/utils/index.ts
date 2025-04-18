export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function strObj(obj: unknown) {
  return JSON.stringify(obj);
}

export function responseWrapper(type: string, data: any) {
  return {
    type,
    data,
  };
}
