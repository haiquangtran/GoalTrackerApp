export class GoalItem {
    public title: string;
    public descriptionPlan: string;
    public subGoals: any[] = [];
    public createdDate: Date;
    public colour: string = "#fff";
    public categoryLabels: string[] = [];
    public isCompleted: boolean = false;

    constructor(title?: string, descriptionPlan?: string) {
        this.title = title;
        this.descriptionPlan = descriptionPlan;
        this.createdDate = new Date();
    }
}