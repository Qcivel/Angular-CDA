import { Component, inject, OnInit, signal  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskPromise } from '../../services/task-promise';

@Component({
  imports: [FormsModule],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {
  // 1. TODO: Injecter le service TaskPromiseService
  private taskService = inject(TaskPromise);

  // 2. TODO: Déclarer les Signals (tasks et newTaskTitle)
  tasks = signal<Task[]>([]);
  newTaskTitle = signal<string>('');

  async ngOnInit(): Promise<void> {
    // TODO: Charger les tâches au démarrage
    await this.loadTasks();
  }

  // 3. Chargement des données
  async loadTasks(): Promise<void> {
    try {
      const data = await this.taskService.getTasks();
      // TODO: Mettre à jour la valeur du signal tasks
      this.tasks./* TODO: Méthode pour écrire dans un signal */(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error);
    }
  }

  // 4. Ajout d'une tâche
  async addTask(): Promise<void> {
    const title = this.newTaskTitle().trim();
    if (!title) return;

    const newTask: Task = {
      title,
      status: 'pending',
    };

    try {
      // TODO: Appeler le service pour ajouter la tâche
      await this.taskService./* TODO: Méthode d'ajout */(newTask);
      
      // TODO: Réinitialiser le champ de saisie (signal)
      this.newTaskTitle./* TODO: Réinitialiser */;
      
      // TODO: Recharger la liste
      await this.loadTasks();
    } catch (error) {
      console.error('Erreur lors de l’ajout de la tâche :', error);
    }
  }

  // 5. Suppression d'une tâche
  async deleteTask(taskId: string): Promise<void> {
    try {
      // TODO: Appeler le service pour supprimer la tâche
      await this.taskService./* TODO: Méthode de suppression */(taskId);
      
      // TODO: Recharger la liste
      await this.loadTasks();
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
    }
  }

  // 6. Modification du statut
  async toggleStatus(task: Task): Promise<void> {
    // TODO: Inverser le statut ('pending' <-> 'completed')
    const updatedTask: Task = {
      ...task,
      status: task.status === 'pending' ? 'completed' : 'pending',
    };

    try {
      // TODO: Appeler le service pour mettre à jour
      await this.taskService./* TODO: Méthode de mise à jour */(updatedTask);
      
      // TODO: Recharger la liste
      await this.loadTasks();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut :', error);
    }
  }
}
