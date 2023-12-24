
export const serializeRegister = (registerMap) => {
      const mapAsArray = Array.from(registerMap);
      return JSON.stringify(mapAsArray);
};

export const deserializeRegister = (serializedMap) => {
    const parsedMap = new Map(JSON.parse(serializedMap));
    return parsedMap;
};