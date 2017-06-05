export class GoalItem {
    public title: string;
    public descriptionPlan: string;
    public goal: any;
    public subGoals: any[] = [];
    public createdDate: Date;
    public colour: string = "#fff";
    public categoryLabels: string[] = [];
    public isCompleted: boolean = false;

    constructor(title?: string, goal?: any, descriptionPlan?: string) {
        this.title = title;
        this.goal = goal;
        this.descriptionPlan = descriptionPlan;
        this.createdDate = new Date();
    }
}