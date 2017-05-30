export class GoalItem {
    public title: string;
    public descriptionPlan: string;
    public goal: any;
    public subGoals: any[] = [];
    public createdDate: Date;
    public colour: string = "#fff";

    constructor(title?: string, goal?: any, descriptionPlan?: string) {
        this.title = title;
        this.goal = goal;
        this.descriptionPlan = descriptionPlan;
        this.createdDate = new Date();
    }
}