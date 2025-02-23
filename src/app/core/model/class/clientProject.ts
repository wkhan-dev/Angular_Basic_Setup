export class ClientProject {
    empId: number;
    empCode: string;
    empName: string;
    empEmailId: string;
    empDesignation: string;
    projectName: string;
    startDate: Date;
    expectedEndDate: Date;
    clientName: string;
    clientProjectId: number;    

    constructor() {
        this.empId = 0,
        this.empCode = "",
        this.empEmailId = "",
        this.empName = "",
        this.empDesignation = "",
        this.projectName = "",
        this.startDate = new Date(),
        this.expectedEndDate = new Date(),
        this.clientName ="",
        this.clientProjectId = 0      
    }
}
