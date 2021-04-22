export type UserId = number;

interface UserInterface {
  id: UserId;
  firstName: string;
  lastName: string;
  nickname?: string;
  email: string;
  sendEmail: (draft: boolean) => boolean;
  update: (params: Partial<UserInterface>) => boolean;
}

class User implements UserInterface {
  id: number;

  firstName: string;
  lastName: string;
  email: string;

  constructor(params: Omit<UserInterface, "sendEmail" | "update">) {
    this.id = params.id;
    this.email = params.email;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }
  update = (params: Omit<Partial<UserInterface>, "id">) => {
    if (params.email) this.email = params.email;

    return true;
  };

  sendEmail = (draft: boolean) => {
    return false;
  };
}

const user: User = new User({
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "test@example.com",
});