export interface IUser {
    email: string,
    password: string,
    userName: string,
    token: string
}

export interface IUniversalProps {
    //dispatch: () => {}
}

export interface IUniversalState {
    user: IUser
    isLoading: boolean
}

export interface IPropsWithDispatch {
    // dispatch?: any,
    // [propName: string]: any

}


export interface IAuthenticatingProps {
    user: IUser,
    isLoading: boolean,
    [propName: string]: any
}

export interface IAuthenticatingState {
    user: IUser,
    isLoading: boolean,
    [propName: string]: any
}