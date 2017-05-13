export class GoalItem {
    public title: string;
    public goal: any;
    public subGoals: any[] = [];

    constructor(title?: string, goal?: any) {
        this.title = title;
        this.goal = goal;
    }
}