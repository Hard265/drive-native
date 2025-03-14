function catchError<T>(fn: ()=>Promise<T>): Promise<[undefined, T]|[Error]>{

}

const [error, data] = catchError(async()=>{})
