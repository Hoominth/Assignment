const { Courses } = require('../../config/firebase')

class AdminController {
      async index(req, res) {
            const userInfo = req.cookies.userInfo
            const snapshot = await Courses.get()
            const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            res.render('admin', {
                  layout: false,
                  courses,
                  userInfo
            })
      }
      async create(req, res) {
            const coursesRef = db.collection('courses').doc()
      }
      async update(req, res) {
            const id = req.params.id
            let course;
            if (id !== null) {
                  const courseRef = Courses.doc(id)
                  const doc = await courseRef.get()
                  course = doc.data()
            }
            res.render('edit', { layout: false, course })
      }
      async delete(req, res) {
            const coursesRef = db.collection('coursesPro')
            const snapshot = await coursesRef.get()
            const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            courses.forEach(course => {
                  if (course.id === req.params.id) {
                        coursesRef.doc(req.params.id).delete();
                  }
            })
            res.redirect('back')
      }
}

module.exports = new AdminController