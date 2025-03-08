# Gradebook Application - JavaScript Fundamentals  
---

## Overview  
This project involves building a **Gradebook Application** to automate classroom grading tasks. Through core JavaScript concepts, the application calculates class averages, converts scores to letter grades, checks passing status, and generates student feedback messages. Designed to reinforce programming fundamentals while addressing real-world educational needs.

---

## Project Goals  
1. **Calculate Class Averages**: Compute the average score from an array of test results.  
2. **Convert Scores to Letter Grades**: Map numerical values to grades (e.g., 85 → "B").  
3. **Determine Pass/Fail Status**: Check if a student’s grade is above "F".  
4. **Generate Student Feedback**: Create personalized messages with results.  


### Tasks  

#### **Task 1: Calculate Class Average**  
Implement the `getAverage` function to compute the average score from an array of test scores.  
- **Input**: Array of numbers (e.g., `[92, 88, 77]`).  
- **Output**: Average score (rounded to one decimal place).  
- **Example**:  
  ```  
  getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]) → 71.7  
  ```  

#### **Task 2: Convert Score to Letter Grade**  
Implement the `getGrade` function to map numerical scores to letter grades using the following scale:  
| Score Range | Grade |  
|-------------|-------|  
| 100         | A++   |  
| 90-99       | A     |  
| 80-89       | B     |  
| 70-79       | C     |  
| 60-69       | D     |  
| 0-59        | F     |  

- **Example**:  
  ```  
  getGrade(96) → "A"  
  getGrade(56) → "F"  
  ```  

#### **Task 3: Check Passing Grade**  
Implement the `hasPassingGrade` function to determine if a student’s grade is passing (not an "F").  
- **Output**: `true` if passing, `false` otherwise.  
- **Example**:  
  ```  
  hasPassingGrade(87) → true  
  hasPassingGrade(53) → false  
  ```  

#### **Task 4: Generate Student Message**  
Implement the `studentMsg` function to create a message for a student based on their score and the class average.  
- **Message Format**:  
  - If passed:  
    `"Class average: [average]. Your grade: [grade]. You passed the course."`  
  - If failed:  
    `"Class average: [average]. Your grade: [grade]. You failed the course."`  
- **Example**:  
  ```  
  studentMsg([92, 88, 12, ...], 37) → "Class average: 71.7. Your grade: F. You failed the course."  
  ```  

---

### Technologies
- JavaScript (ES6+): Core logic and functionality.

---

*A project completed as part of the freeCodeCamp.org JavaScript Algorithms and Data Structures Certification.*