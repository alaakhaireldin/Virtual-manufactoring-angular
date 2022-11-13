export class ProjectService {
  projects = [
    {
      projectTitle: 'Default Project Title 1',
      projectBackgroundImage: 'Image link 1',
      logFile: 'Log file link 1',
      unit: 12,
    },
    {
      projectTitle: 'Default Project Title 2',
      projectBackgroundImage: 'Image link 2',
      logFile: 'Log file link 2',
      unit: 4,
    },
  ];

  addProjects(name: string, imageLink: string, logLink: string, unit: number) {
    const pos = this.projects.findIndex((proj) => {
      return proj.projectTitle == name;
    });
    if (pos != -1) {
      return;
    }
    const newProj = {
      projectTitle: name,
      projectBackgroundImage: imageLink,
      logFile: logLink,
      unit: unit,
    };
    this.projects.push(newProj);
  }
}
