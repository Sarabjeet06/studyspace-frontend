import React from 'react'

const featureSections = 'w-11/12 mx-auto text-center mb-10';
const listDescription = 'text-sm mt-2 text-gray-600';
const featureSec1 = 'w-5/6 sm:w-3/5 mx-auto mb-5';
const sectHeading = 'text-2xl sm:text-3xl lg:text-4xl font-bold py-4'
const sectDesc = 'text-sm text-slate-800'
const featureSect2 = 'w-[95%] mx-auto text-left bg-white px-5 pt-10 py-16 rounded-xl';
const ulStyle = 'flex lg:flex-row flex-col *:py-4 *:px-4 lg:*:w-1/4 *:w-full'

export default function Features() {
  return (
    <div className='w-full overflow-hidden py-5'>
        <div className={featureSections}>
            <div className='w-5/6 sm:w-3/5 mx-auto mb-5'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold py-4'>Empowering educators and improving efficiency</h2>
                <p className='text-sm text-slate-800'>Enhancing teaching effectiveness and the streamlining of administrative tasks for educators within the StudySpace platform</p>
            </div>
            <div className='w-[95%] mx-auto text-left bg-white px-5 pt-10 py-16 rounded-xl'>
                <ul className='flex lg:flex-row flex-col *:py-4 *:px-4 lg:*:w-1/4 *:w-full'>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Enhanced Teaching Effectiveness</h2>
                            <div className={listDescription}>interactive tools and features like virtual whiteboards, multimedia content embedding, and real-time collaboration tools to deliver dynamic and effective instruction.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Efficient Workflow Management</h2>
                            <div className={listDescription}>Simplifying administrative tasks such as class creation, assignment distribution, and grading, saving educators time and effort and allowing them to focus more on instructional activities.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Professional Development Support</h2>
                            <div className={listDescription}>Offering resources, training materials, and community forums for continuous growth and improvement in teaching practices, including access to webinars, workshops, and best practice guides.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Data-Driven Decision Making</h2>
                            <div className={listDescription}>Providing educators with robust learning analytics dashboards and reporting tools to gain insights into student performance, learning trends, and instructional efficacy, enabling informed decision-making and targeted intervention strategies.</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className={featureSections}>
            <div className={featureSec1}>
                <h2 className={sectHeading}>Student engagement and learning experience</h2>
                <p className={sectDesc}>Creating an environment where students are actively involved, motivated, and immersed in their learning process.</p>
            </div>
            <div className={featureSect2}>
                <ul className={ulStyle}>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Improved Student Engagement</h2>
                            <div className={listDescription}>Fostering motivation, participation, and collaboration among students through features like gamification elements, interactive learning activities, and peer-to-peer interaction opportunities.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Personalized Learning Experiences</h2>
                            <div className={listDescription}>Tailoring instruction to meet individual student needs, preferences, and learning styles through adaptive learning algorithms, customization options, and differentiated instruction strategies.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Interactive Learning Environments</h2>
                            <div className={listDescription}>Creating engaging and immersive learning environments with features like virtual labs, simulations, and multimedia content embedding to enhance student interest and comprehension.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Collaborative Learning Opportunities</h2>
                            <div className={listDescription}>Providing students with opportunities to collaborate on projects, share ideas, and engage in meaningful discussions with peers and educators, promoting teamwork, communication skills, and critical thinking.</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className={featureSections}>
            <div className={featureSec1}>
                <h2 className={sectHeading}>Accessibility and Inclusivity</h2>
                <p className={sectDesc}>Ensuring equal access to education for users of all abilities and backgrounds.</p>
            </div>
            <div className={featureSect2}>
                <ul className={ulStyle}>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Facilitated Communication and Collaboration:</h2>
                            <div className={listDescription}>Enhancing communication and collaboration between educators, students, and parents through seamless communication channels, collaboration tools, and peer interaction opportunities, fostering a supportive and connected learning community.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Accessibility Features</h2>
                            <div className={listDescription}>Ensuring equal access to education for users of all abilities by adhering to accessibility standards and providing features like screen reader compatibility, alternative text descriptions, and keyboard navigation options.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Inclusive Learning Environment</h2>
                            <div className={listDescription}>Creating an inclusive learning environment where all students feel valued, respected, and supported, regardless of their background, abilities, or learning needs.</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className='font-semibold'>Parental Engagement</h2>
                            <div className={listDescription}>Offering features that enable parents to actively participate in their child's education, including access to student progress reports, assignment grades, and communication channels with educators, fostering collaboration between home and school.</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
