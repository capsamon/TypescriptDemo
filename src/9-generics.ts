interface genericResponse<T = unknown> {
  status: 'Failed' | 'Success';
  body: T;
}

interface aReponse {
  title: string;
}

export function getResponse(): genericResponse<aReponse> {
  return {
    status: 'Success',
    body: {
      title: 'a title',
    },
  };
}

const value = getResponse();
console.log(value.body.title);
