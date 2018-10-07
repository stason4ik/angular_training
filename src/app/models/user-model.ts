export class UserModel  {
    constructor(
        public id: number,
        public userName: string,
        public email: string,
        public info: UserInfo
    ){}
}

export class UserInfo  {
    constructor(
        public firstName: string,
        public lastName: string,
        public jobTitle: string,
        public avatar: string,
        public phoneNumber: string
    ){}
}