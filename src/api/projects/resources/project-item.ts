import { ApiProperty } from "@nestjs/swagger"
import { ProjectResource } from "./project";
import { Project } from "src/domain/models/project.entity";

export class ProjectItemResource {

    @ApiProperty({ type: ProjectResource })
    readonly data: ProjectResource

    constructor(project: ProjectResource) {
        this.data = project;
    }

    static from(project: Project): ProjectItemResource {
        return new ProjectItemResource(project);
    }
}
