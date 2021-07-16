interface genericResponse<T = unknown> {
  status: 'Failed' | 'Success';
  body: T;
}

interface aReponse {
  title: string;
}

interface bReponse {
  title: string;
  test: string;
}

export function getResponse(): genericResponse<bReponse> {
  return {
    status: 'Success',
    body: {
      title: 'a title',
      test: 'test'
    },
  };
}

const value = getResponse();
console.log(value.body.title);
