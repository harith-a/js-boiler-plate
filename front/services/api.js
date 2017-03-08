export function getRecentProjects(app) {
    const projects = app.service('projects');
    return projects.get().then((data,err)=> data.data);
}