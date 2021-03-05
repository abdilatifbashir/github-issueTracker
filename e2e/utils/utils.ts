export const delay = async (time: number): Promise<any> => {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  };