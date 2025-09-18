// task_1/js/main.ts

interface Teacher {
  readonly firstName: string; // can only be set at initialization
  readonly lastName: string;  // can only be set at initialization
  fullTimeEmployee: boolean;  // always required
  yearsOfExperience?: number; // optional
  location: string;           // always required
  [key: string]: any;         // allows extra attributes (like contract)
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // extra attribute
};

console.log(teacher3);

