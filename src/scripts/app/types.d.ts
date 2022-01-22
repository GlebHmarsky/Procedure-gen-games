declare namespace SlicesDefinitions {
  export interface IApiSliceState<T1> {
    data: T1;
    apiStatus: 'None' | 'Pending' | 'Success' | 'Failed';
    error: string | null;
  }
}
