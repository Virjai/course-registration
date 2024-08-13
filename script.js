
    const courseDropdown = document.getElementById("courseDropdown")
    const addCourseBtn = document.getElementById("addCourseBtn")
    const courseInputSection = document.getElementById("courseInputSection")
    const courseInput = document.getElementById("courseInputSection")
    const courseTickBtn = document.getElementById("courseTickBtn")
    const courseCrossBtn = document.getElementById("courseCrossBtn")
    
    const addStdudentBtn = document.getElementById("addStudentBtn")
    const studentDropdown = document.getElementById("studentDropdown")
    const studentInputSection = document.getElementById("studentInputSection")
    const studentInput = document.getElementById("studentInput")
    const studentTickBtn = document.getElementById("studentTickBtn")
    const studentCrossBtn = document.getElementById("studentCrossBtn")
    
    
    const courses = {}

    addCourseBtn.addEventListener("click", () => {
        courseInputSection.style.display = "block"
    })

    courseTickBtn.addEventListener("click", () => {
        const courseName = courseInput.value.trim()
        if(courseName){
            courses[courseName] = []
            const option = document.createElement("option")
            option.value = courseName
            option.textContent = courseName
            courseDropdown.appendChild(option)
            courseInputSection.style.display = "none"
            courseInput.value = ""
        }
    })

    courseCrossBtn.addEventListener("click", () => {
        courseInputSection.style.display = "none"
        courseInput.value = ""
    })


    courseDropdown.addEventListener("change", () => {
        studentDropdown.innerHTML = "<option value='' disabled selected>Select a student</option>"
        const selectedCourse = courseDropdown.value
        if(selectedCourse){
            addStdudentBtn.disabled = false
            // addStdudentBtn.style.dispaly = "block"
            updateStudentDropdown(selectedCourse)
        }else{
            // addCourseBtn.style.dispaly = "none"
            addStdudentBtn.disabled = true
        }
    })


    addStdudentBtn.addEventListener("click", () => {
        studentInputSection.style.display = "block"
        studentInput.focus()
    })

    studentTickBtn.addEventListener("click", () => {
        const StudentName = studentInput.value.trim()
        const selectedCourse = courseDropdown.value
        if(StudentName && selectedCourse ){
            courses[selectedCourse].push(studentName)
            updateStudentDropdown(selectedCourse)
            studentInputSection.style.display = "none"
            studentInput.value = ""
        }
    })


    studentCrossBtn.addEventListener("click", () => {
        studentInputSection.style.display = "none"
        studentInput.value = ""
    })

    function updateStudentDropdown(courseName){
        studentDropdown.innerHTML = "<option value='' disabled selected>Select a student</option>"
        
        courses[course].forEach((student) => {
            const option = document.createElement("option")
            option.value = student
            option.textContent = student
            studentDropdown.appendChild(option)
        })
    }
