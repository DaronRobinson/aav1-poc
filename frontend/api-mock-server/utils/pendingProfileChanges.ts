export function addPendingToKeys(input: {[key: string]: any},exceptions:string[] = []): {[key: string]: any} {
  return Object.entries(input).reduce((newObj, [key, value]) => {
    if(exceptions.includes(key)){
      newObj[key] = value;
      return newObj;
    }
      newObj[`${key}Pending`] = value;
      return newObj;
  }, {} as {[key: string]: any});
}
