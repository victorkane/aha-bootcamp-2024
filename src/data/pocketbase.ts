import PocketBase from 'pocketbase';

export const pb = new PocketBase(import.meta.env.POCKETBASE_URL || process.env.POCKETBASE_URL);

export async function getProjects() {
  const projects = await pb.collection('projects').getFullList();

  return projects;
}
