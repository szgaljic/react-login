

export class Credentials {

  constructor(public username: string, private password: string) {}

  get basicAuth(): string {
    return 'Basic ' + btoa(this.username + ':' + this.password);
  }
}
