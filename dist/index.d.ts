type sayhello = {
    firstname: string;
    lastname?: string;
};

declare function sayHello({ firstname, lastname }: sayhello): void;

export { sayHello, type sayhello };
