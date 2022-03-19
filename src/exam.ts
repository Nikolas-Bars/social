type UserType = {
    id: number
    userName: string
    email: string
    password: string
}

type ChangeUserPasswordTypeAT = {
    type: "CHANGE-USER-PASSWORD"
    payload: {
        id: number
        newPassword: string
    }
}

export const userReducer =
    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
        switch (action.type) {
            case "CHANGE-USER-PASSWORD":
                return state.map(u =>
                    u.id === action.payload.id
                        ? {...u, password: action.payload.newPassword}
                        : u)
            default:
                return state
        }
    }