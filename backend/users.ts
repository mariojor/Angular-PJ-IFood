export class User {
    constructor(public email: string,
                public name: string,
                private password: string) {}


    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key: string]: User} = {
    'j@g.com' : new User('j@g.com', 'j', 'j'),
    'm@g.com' : new User('m@g.com', 'm', 'm'),
}
