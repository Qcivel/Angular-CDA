import { Injectable } from '@angular/core';
import { Database, ref, set, push, update, remove, get } from '@angular/fire/database';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskPromise {
  private tasksRef: any;

  constructor(private db: Database) {
    // 1. Définir la référence vers le nœud 'tasks'
    this.tasksRef = ref(this.db,'tasks')/* TODO: Initialiser la référence vers 'tasks' */
  }

  // Récupérer une fois la liste des tâches
  async getTasks(): Promise<Task[]> {
    // TODO: Récupérer le snapshot unique des données
    const snapshot = await  get(this.tasksRef) /* TODO: Utiliser get() avec tasksRef */;
    const data = snapshot.val();
    
    // TODO: Si des données existent, transformer l'objet en tableau avec les identifiants
    return data ? Object.keys(data).map((id) => ({id, ...data[id] /* TODO: Associer l'id et les propriétés de data[id] */ })) : [];
  }

  // Ajouter une tâche
  async addTask(task: Task): Promise<void> {
    // TODO: Créer une nouvelle référence unique dans tasksRef
    const newTaskRef = push(this.tasksRef)

    // TODO: Enregistrer la tâche
    await set(newTaskRef, task);
  }

  // Mettre à jour une tâche
  async updateTask(task: Task): Promise<void> {
    if (!task.id) {
      throw new Error('La tâche doit avoir un ID pour être mise à jour.');
    }
   
    // TODO: Cibler le nœud de la tâche spécifique (tasks/ID)
    const taskRef = ref(this.db, `tasks/${task.id}`);
    
    // TODO: Effectuer la mise à jour
    await update(taskRef, task);
  }

  // Supprimer une tâche
  async deleteTask(taskId: string): Promise<void> {
    // TODO: Cibler le nœud de la tâche spécifique (tasks/taskId)
    const taskRef = ref(this.db,'tasks/${taskId}');
    
    // TODO: Supprimer la tâche
    await remove(taskRef);
  }
}