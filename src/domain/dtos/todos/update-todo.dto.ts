export class UpdateTodoDto {
  private constructor(
    public id: number,
    private text?: string,
    private completedAt?: Date
  ) {}

  get values() {
    const returnObject: { [key: string]: any } = {};

    if (this.text) returnObject.text = this.text;
    if (this.completedAt) returnObject.completedAt = this.completedAt;
    return returnObject;
  }

  static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
    const { id, text, completedAt } = props;

    if (!id || isNaN(Number(id))) return ["ID must be a valid number"];
    let newCompletedAt = completedAt;
    if (completedAt) {
      newCompletedAt = new Date(completedAt);
      if (newCompletedAt.toString() === "Invalid Date") {
        return ["CompletedAt is not valid Date format"];
      }
    }

    return [undefined, new UpdateTodoDto(id, text, newCompletedAt)];
  }
}
