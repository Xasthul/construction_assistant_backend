import { ApiProperty } from "@nestjs/swagger"
import { ProjectResource } from "./project";

export class ProjectItemsResource {

    @ApiProperty({
        description: 'Array of projects',
        isArray: true,
        type: ProjectResource,
    })
    readonly data: ProjectResource[]

    constructor(projects: ProjectResource[]) {
        this.data = projects;
    }

    static from(projects: ProjectResource[]): ProjectItemsResource {
        return new ProjectItemsResource(projects);
    }
}