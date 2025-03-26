<template>
    <div>
    <div class="table-container shadow">
      <table class="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.city }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">Total number of students: {{ students.length }}</td>
            <td class="text-end">
              <button 
                class="btn btn-sm btn-primary" 
                @click="addStudent">
                <i class="bi bi-plus-circle"></i> Add Student
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="form-control" v-if="isform">
            <form @submit.prevent="submitNewStudent">
            <div class="modal-content">
                <div class="modal-body">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="newStudent.name" required>
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city" v-model="newStudent.city" required>
                </div>
                </div>
                <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Add</button>
                <button type="button" class="btn btn-secondary" @click="isform=false">Close</button>
                </div>
            </div>
            </form>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Body',
    data: () => ({
        isform:false,
      students: [
        { id: 1, name: 'Rahma Mostafa', city: 'Cairo' },
        { id: 2, name: 'Nouran Mohammed', city: 'Cairo' },
        { id: 3, name: 'Sara Mostafa', city: 'Zagzig' },
        { id: 4, name: 'Ahmed Mostafa', city: 'Alex' },
        { id: 5, name: 'Fady Wael', city: 'Mansoura' }
      ],
      newStudent: {
        name: '',
        city: ''
      }
    }),
    methods: {
      addStudent() {
       this.isform=true;
      },
      submitNewStudent() {
        const newId = this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
        this.students.push({
          id: newId,
          name: this.newStudent.name,
          city: this.newStudent.city
        });
      }
    }
  };
  </script>
  
  <style scoped>
.table-container {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(36, 35, 35, 0.5);
  border: rgba(255, 255, 255, 0.301) 1px solid;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1e1e1e;
  color: #fff;
  text-align: left;
  border: rgba(255, 255, 255, 0.301) 1px solid;
}

.table thead {
  background-color: #333;
}

.table tfoot {
  background-color: #222;
  font-weight: bold;
}

.modal-content {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: #1e1e1e;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  width: 90%;
  max-width: 500px;
}

.modal-body {
  padding: 15px;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}

.form-control {
  border-color: #555;
  background-color: #2c2c2c;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
}

.form-control:focus {
  background-color: #3d3d3d;
  color: white;
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

label {
  color: #ccc;
  font-weight: bold;
}

button {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
</style>