type Resource = {
  id: number;
  name: string;
  file: string;
};

type Folder = {
  [teacherName: string]: Resource[];
};

type Subject = {
  name: string;
  folders: {
    "Teacher Materials"?: Folder;
    Assignments?: Folder;
    "Tips to Pass"?: Resource[];
    "Previous Year Papers"?: Resource[];
  };
};

const subjects: Record<string, Subject> = {
  CSE2001: {
    name: "Object Oriented Programming With C++",
    folders: {
      "Teacher Materials": {
        "Dr. Rajesh Kumar": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE2001/DrRajesh_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Rajesh Kumar": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE2001/DrRajesh_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE2001/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE2001/Paper2022.pdf" },
      ],
    },
  },
  CSE2002: {
    name: "Data Structures and Algorithms",
    folders: {
      "Teacher Materials": {
        "Dr. Priya Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE2002/DrPriya_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Priya Sharma": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE2002/DrPriya_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE2002/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE2002/Paper2022.pdf" },
      ],
    },
  },
  CSE2003: {
    name: "Computer Architecture and Organization",
    folders: {
      "Teacher Materials": {
        "Dr. Anil Mehta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE2003/DrAnil_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Anil Mehta": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE2003/DrAnil_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE2003/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE2003/Paper2022.pdf" },
      ],
    },
  },
  CSE2004: {
    name: "Theory Of Computation And Compiler Design",
    folders: {
      "Teacher Materials": {
        "Dr. Neha Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE2004/DrNeha_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Neha Verma": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE2004/DrNeha_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE2004/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE2004/Paper2022.pdf" },
      ],
    },
  },
  CSE3001: {
    name: "Database Management Systems",
    folders: {
      "Teacher Materials": {
        "Dr. Ravi Shankar": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3001/DrRavi_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Ravi Shankar": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE3001/DrRavi_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE3001/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE3001/Paper2022.pdf" },
      ],
    },
  },
  CSE3003: {
    name: "Operating System",
    folders: {
      "Teacher Materials": {
        "Dr. Suman Das": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3003/DrSuman_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Suman Das": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE3003/DrSuman_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE3003/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE3003/Paper2022.pdf" },
      ],
    },
  },
  CSE3004: {
    name: "Design and Analysis of Algorithms",
    folders: {
      "Teacher Materials": {
        "Dr. Kavita Bansal": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3004/DrKavita_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Kavita Bansal": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE3004/DrKavita_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE3004/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE3004/Paper2022.pdf" },
      ],
    },
  },
  CSE3005: {
    name: "Software Engineering",
    folders: {
      "Teacher Materials": {
        "Dr. Arun Patel": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3005/DrArun_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Arun Patel": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE3005/DrArun_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE3005/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE3005/Paper2022.pdf" },
      ],
    },
  },
  CSE3006: {
    name: "Computer Networks",
    folders: {
      "Teacher Materials": {
        "Dr. Varun Joshi": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3006/DrVarun_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Varun Joshi": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE3006/DrVarun_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE3006/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE3006/Paper2022.pdf" },
      ],
    },
  },
  CSE3009: {
    name: "Parallel and Distributed Computing",
    folders: {
      "Teacher Materials": {
        "Dr. Sneha Kapoor": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3009/DrSneha_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Sneha Kapoor": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE3009/DrSneha_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE3009/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE3009/Paper2022.pdf" },
      ],
    },
  },
  CSE3011: {
    name: "Python Programming",
    folders: {
      "Teacher Materials": {
        "Dr. Anjali Singh": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3011/DrAnjali_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Anjali Singh": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE3011/DrAnjali_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE3011/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE3011/Paper2022.pdf" },
      ],
    },
  },
  CSE4001: {
    name: "Internet and Web Programming",
    folders: {
      "Teacher Materials": {
        "Dr. Pankaj Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE4001/DrPankaj_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Pankaj Gupta": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSE4001/DrPankaj_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSE4001/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSE4001/Paper2022.pdf" },
      ],
    },
  },
  ECE2002: {
    name: "Digital Logic Design",
    folders: {
      "Teacher Materials": {
        "Dr. Ramesh Chandra": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ECE2002/DrRamesh_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Ramesh Chandra": [
          { id: 1, name: "Assignment 1", file: "/downloads/ECE2002/DrRamesh_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/ECE2002/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/ECE2002/Paper2022.pdf" },
      ],
    },
  },
  ECE3004: {
    name: "Microprocessors And Microcontrollers",
    folders: {
      "Teacher Materials": {
        "Dr. Anuradha Mishra": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ECE3004/DrAnuradha_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Anuradha Mishra": [
          { id: 1, name: "Assignment 1", file: "/downloads/ECE3004/DrAnuradha_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/ECE3004/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/ECE3004/Paper2022.pdf" },
      ],
    },
  },
  CCA3011: {
    name: "Internet of Things",
    folders: {
      "Teacher Materials": {
        "Dr. Aman Jain": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CCA3011/DrAman_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Aman Jain": [
          { id: 1, name: "Assignment 1", file: "/downloads/CCA3011/DrAman_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CCA3011/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CCA3011/Paper2022.pdf" },
      ],
    },
  },
  CHI2007: {
    name: "Healthcare Information System",
    folders: {
      "Teacher Materials": {
        "Dr. Reema Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CHI2007/DrReema_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Reema Verma": [
          { id: 1, name: "Assignment 1", file: "/downloads/CHI2007/DrReema_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CHI2007/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CHI2007/Paper2022.pdf" },
      ],
    },
  },
  CSA3004: {
    name: "Data Visualization",
    folders: {
      "Teacher Materials": {
        "Dr. Vishal Kapoor": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSA3004/DrVishal_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Vishal Kapoor": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSA3004/DrVishal_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSA3004/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSA3004/Paper2022.pdf" },
      ],
    },
  },
  CSA3005: {
    name: "Cloud Computing",
    folders: {
      "Teacher Materials": {
        "Dr. Sanjay Rathore": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSA3005/DrSanjay_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Sanjay Rathore": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSA3005/DrSanjay_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSA3005/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSA3005/Paper2022.pdf" },
      ],
    },
  },
  CSA3017: {
    name: "Knowledge Engineering",
    folders: {
      "Teacher Materials": {
        "Dr. Alok Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSA3017/DrAlok_Lecture1.pdf" },
        ],
      },
      Assignments: {
        "Dr. Alok Sharma": [
          { id: 1, name: "Assignment 1", file: "/downloads/CSA3017/DrAlok_Assignment1.pdf" },
        ],
      },
      "Tips to Pass": [
        { id: 1, name: "Exam Tips", file: "/downloads/CSA3017/ExamTips.pdf" },
      ],
      "Previous Year Papers": [
        { id: 1, name: "Paper 2022", file: "/downloads/CSA3017/Paper2022.pdf" },
      ],
    },
  },
  CSA4003: {
    name: "Data Mining And Data Warehousing",
    folders: {
      "Teacher Materials": {
        "Dr. Pooja Mehta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSA4003/DrPooja_Lecture1.pdf" },
        ],
      },
    },
  },
  CSA4011: {
    name: "Information Retrieval and Web Search",
    folders: {
      "Teacher Materials": {
        "Dr. Arvind Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSA4011/DrArvind_Lecture1.pdf" },
        ],
      },
    },
  },
  CSD4002: {
    name: "Ethical Hacking",
    folders: {
      "Teacher Materials": {
        "Dr. Sumit Rathi": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSD4002/DrSumit_Lecture1.pdf" },
        ],
      },
    },
  },
  CSD4008: {
    name: "Cyber Security Framework",
    folders: {
      "Teacher Materials": {
        "Dr. Shalini Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSD4008/DrShalini_Lecture1.pdf" },
        ],
      },
    },
  },
  CSD5002: {
    name: "Virtualization Essentials",
    folders: {
      "Teacher Materials": {
        "Dr. Ramesh Bhardwaj": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSD5002/DrRamesh_Lecture1.pdf" },
        ],
      },
    },
  },
  CSD5008: {
    name: "Forensic Science",
    folders: {
      "Teacher Materials": {
        "Dr. Anjali Mukherjee": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSD5008/DrAnjali_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE3008: {
    name: "Soft Computing",
    folders: {
      "Teacher Materials": {
        "Dr. Vivek Singh": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3008/DrVivek_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE3010: {
    name: "Computer Vision",
    folders: {
      "Teacher Materials": {
        "Dr. Deepika Rathi": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3010/DrDeepika_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE3012: {
    name: "Mobile Application Development",
    folders: {
      "Teacher Materials": {
        "Dr. Ajay Kulkarni": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3012/DrAjay_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE3013: {
    name: "Agile Software Development",
    folders: {
      "Teacher Materials": {
        "Dr. Meenakshi Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3013/DrMeenakshi_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE3014: {
    name: "Medical Imaging",
    folders: {
      "Teacher Materials": {
        "Dr. Rohit Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3014/DrRohit_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE3015: {
    name: "AWS Cloud Practitioner",
    folders: {
      "Teacher Materials": {
        "Dr. Kavita Agrawal": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3015/DrKavita_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE3016: {
    name: "AWS Solution Architect",
    folders: {
      "Teacher Materials": {
        "Dr. Ramesh Yadav": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3016/DrRamesh_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE3017: {
    name: "Salesforce",
    folders: {
      "Teacher Materials": {
        "Dr. Pranav Joshi": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE3017/DrPranav_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE4003: {
    name: "Bigdata Analytics",
    folders: {
      "Teacher Materials": {
        "Dr. Nidhi Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE4003/DrNidhi_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE4005: {
    name: "Machine Learning",
    folders: {
      "Teacher Materials": {
        "Dr. Pankaj Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE4005/DrPankaj_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE4012: {
    name: "Software Defined Network",
    folders: {
      "Teacher Materials": {
        "Dr. Shalini Mehta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE4012/DrShalini_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE4016: {
    name: "Software Project Management",
    folders: {
      "Teacher Materials": {
        "Dr. Raghav Shukla": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE4016/DrRaghav_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE4017: {
    name: "Software Testing",
    folders: {
      "Teacher Materials": {
        "Dr. Ananya Mishra": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE4017/DrAnanya_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE4019: {
    name: "Advanced Java Programming",
    folders: {
      "Teacher Materials": {
        "Dr. Arvind Kumar": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE4019/DrArvind_Lecture1.pdf" },
        ],
      },
    },
  },
  CSG2001: {
    name: "Augmented Reality and Virtual Reality",
    folders: {
      "Teacher Materials": {
        "Dr. Kavita Singh": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSG2001/DrKavita_Lecture1.pdf" },
        ],
      },
    },
  },
  ECE4007: {
    name: "Wireless Sensor Networks",
    folders: {
      "Teacher Materials": {
        "Dr. Prashant Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ECE4007/DrPrashant_Lecture1.pdf" },
        ],
      },
    },
  },
  ECE4010: {
    name: "Embedded Systems",
    folders: {
      "Teacher Materials": {
        "Dr. Manisha Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ECE4010/DrManisha_Lecture1.pdf" },
        ],
      },
    },
  },
  ECE6012: {
    name: "Pattern Recognition and Image Analysis",
    folders: {
      "Teacher Materials": {
        "Dr. Mohit Kapoor": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ECE6012/DrMohit_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT2009: {
    name: "Applied Cryptography",
    folders: {
      "Teacher Materials": {
        "Dr. Priyanka Rathi": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT2009/DrPriyanka_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT5004: {
    name: "Mathematical Foundations for Cybersecurity",
    folders: {
      "Teacher Materials": {
        "Dr. Rohit Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT5004/DrRohit_Lecture1.pdf" },
        ],
      },
    },
  },
  CHY1001: {
    name: "Engineering Chemistry",
    folders: {
      "Teacher Materials": {
        "Dr. Suresh Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CHY1001/DrSuresh_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT1001: {
    name: "Calculus and Laplace Transforms",
    folders: {
      "Teacher Materials": {
        "Dr. Neeta Agarwal": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT1001/DrNeeta_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT2002: {
    name: "Discrete Mathematics and Graph Theory",
    folders: {
      "Teacher Materials": {
        "Dr. Vinay Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT2002/DrVinay_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT3002: {
    name: "Applied Linear Algebra",
    folders: {
      "Teacher Materials": {
        "Dr. Rahul Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT3002/DrRahul_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT3003: {
    name: "Probability, Statistics, and Reliability",
    folders: {
      "Teacher Materials": {
        "Dr. Sunita Mehta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT3003/DrSunita_Lecture1.pdf" },
        ],
      },
    },
  },
  PHY1001: {
    name: "Engineering Physics",
    folders: {
      "Teacher Materials": {
        "Dr. Ramesh Yadav": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/PHY1001/DrRamesh_Lecture1.pdf" },
        ],
      },
    },
  },
  CSA2001: {
    name: "Fundamentals in AI & ML",
    folders: {
      "Teacher Materials": {
        "Dr. Anjali Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSA2001/DrAnjali_Lecture1.pdf" },
        ],
      },
    },
  },
  EEE1001: {
    name: "Electric Circuits and Systems",
    folders: {
      "Teacher Materials": {
        "Dr. Rajeev Mishra": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/EEE1001/DrRajeev_Lecture1.pdf" },
        ],
      },
    },
  },
  MEE2014: {
    name: "Engineering Design and Modelling",
    folders: {
      "Teacher Materials": {
        "Dr. Kavita Joshi": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MEE2014/DrKavita_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE1021: {
    name: "Introduction to Problem Solving and Programming",
    folders: {
      "Teacher Materials": {
        "Dr. Ajay Kumar": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE1021/DrAjay_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE2006: {
    name: "Programming in Java",
    folders: {
      "Teacher Materials": {
        "Dr. Arvind Kapoor": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE2006/DrArvind_Lecture1.pdf" },
        ],
      },
    },
  },
  PLA1004: {
    name: "Competitive Coding Practices",
    folders: {
      "Teacher Materials": {
        "Dr. Preeti Singh": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/PLA1004/DrPreeti_Lecture1.pdf" },
        ],
      },
    },
  },
  PLA1006: {
    name: "Lateral Thinking",
    folders: {
      "Teacher Materials": {
        "Dr. Mahesh Chandra": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/PLA1006/DrMahesh_Lecture1.pdf" },
        ],
      },
    },
  },
  SST1003: {
    name: "Professional Communication Skills for Engineers",
    folders: {
      "Teacher Materials": {
        "Dr. Sneha Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/SST1003/DrSneha_Lecture1.pdf" },
        ],
      },
    },
  },
  SST2003: {
    name: "Dynamics of Workplace Communication Skills",
    folders: {
      "Teacher Materials": {
        "Dr. Nandita Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/SST2003/DrNandita_Lecture1.pdf" },
        ],
      },
    },
  },
  CHY1006: {
    name: "Environmental Sustainability",
    folders: {
      "Teacher Materials": {
        "Dr. Ramesh Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CHY1006/DrRamesh_Lecture1.pdf" },
        ],
      },
    },
  },
  ENG1004: {
    name: "Effective Technical Communication",
    folders: {
      "Teacher Materials": {
        "Dr. Anjali Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ENG1004/DrAnjali_Lecture1.pdf" },
        ],
      },
    },
  },
  ENG2005: {
    name: "Advanced Technical Communication",
    folders: {
      "Teacher Materials": {
        "Dr. Vinod Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ENG2005/DrVinod_Lecture1.pdf" },
        ],
      },
    },
  },
  DSN2092: {
    name: "Summer Industrial Internship",
    folders: {
      "Teacher Materials": {
        "Dr. Pooja Mehta": [
          { id: 1, name: "Internship Guidelines", file: "/downloads/DSN2092/DrPooja_Guidelines.pdf" },
        ],
      },
    },
  },
  DSN2093: {
    name: "Semester Internship",
    folders: {
      "Teacher Materials": {
        "Dr. Sanjay Kumar": [
          { id: 1, name: "Internship Guidelines", file: "/downloads/DSN2093/DrSanjay_Guidelines.pdf" },
        ],
      },
    },
  },
  DSN2098: {
    name: "Project Exhibition – I",
    folders: {
      "Teacher Materials": {
        "Dr. Kavita Singh": [
          { id: 1, name: "Project Guidelines", file: "/downloads/DSN2098/DrKavita_Guidelines.pdf" },
        ],
      },
    },
  },
  DSN2099: {
    name: "Project Exhibition – II",
    folders: {
      "Teacher Materials": {
        "Dr. Rohit Sharma": [
          { id: 1, name: "Project Guidelines", file: "/downloads/DSN2099/DrRohit_Guidelines.pdf" },
        ],
      },
    },
  },
  DSN3099: {
    name: "Engineering Project in Community Service",
    folders: {
      "Teacher Materials": {
        "Dr. Sneha Kapoor": [
          { id: 1, name: "Project Guidelines", file: "/downloads/DSN3099/DrSneha_Guidelines.pdf" },
        ],
      },
    },
  },
  DSN4091: {
    name: "Capstone Project - Phase 1",
    folders: {
      "Teacher Materials": {
        "Dr. Alok Gupta": [
          { id: 1, name: "Phase 1 Guidelines", file: "/downloads/DSN4091/DrAlok_Guidelines.pdf" },
        ],
      },
    },
  },
  DSN4092: {
    name: "Capstone Project - Phase 2",
    folders: {
      "Teacher Materials": {
        "Dr. Priya Sharma": [
          { id: 1, name: "Phase 2 Guidelines", file: "/downloads/DSN4092/DrPriya_Guidelines.pdf" },
        ],
      },
    },
  },
  CHY2007: {
    name: "Modeling And Simulation Of Biological Systems",
    folders: {
      "Teacher Materials": {
        "Dr. Sunil Mehta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CHY2007/DrSunil_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT2001: {
    name: "Differential And Difference Equations",
    folders: {
      "Teacher Materials": {
        "Dr. Anita Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT2001/DrAnita_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT2003: {
    name: "Applied Numerical Methods",
    folders: {
      "Teacher Materials": {
        "Dr. Pankaj Kumar": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT2003/DrPankaj_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT2004: {
    name: "Operations Research",
    folders: {
      "Teacher Materials": {
        "Dr. Alok Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT2004/DrAlok_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT3004: {
    name: "Random Process",
    folders: {
      "Teacher Materials": {
        "Dr. Kavita Bansal": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT3004/DrKavita_Lecture1.pdf" },
        ],
      },
    },
  },
  MAT3008: {
    name: "Computational Game Theory",
    folders: {
      "Teacher Materials": {
        "Dr. Ajay Kulkarni": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MAT3008/DrAjay_Lecture1.pdf" },
        ],
      },
    },
  },
  PHY2011: {
    name: "Biophysics",
    folders: {
      "Teacher Materials": {
        "Dr. Preeti Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/PHY2011/DrPreeti_Lecture1.pdf" },
        ],
      },
    },
  },
  BIO1501: {
    name: "Bio Inspired Design",
    folders: {
      "Teacher Materials": {
        "Dr. Sneha Kapoor": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/BIO1501/DrSneha_Lecture1.pdf" },
        ],
      },
    },
  },
  CDS3005: {
    name: "Foundations of Data Science",
    folders: {
      "Teacher Materials": {
        "Dr. Ramesh Yadav": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CDS3005/DrRamesh_Lecture1.pdf" },
        ],
      },
    },
  },
  CSD3010: {
    name: "Cyber Physical Systems",
    folders: {
      "Teacher Materials": {
        "Dr. Kavita Agarwal": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSD3010/DrKavita_Lecture1.pdf" },
        ],
      },
    },
  },
  CSG2003: {
    name: "Human Computer Interaction",
    folders: {
      "Teacher Materials": {
        "Dr. Sanjay Mishra": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSG2003/DrSanjay_Lecture1.pdf" },
        ],
      },
    },
  },
  EAC4012: {
    name: "Body Area Networks",
    folders: {
      "Teacher Materials": {
        "Dr. Neha Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/EAC4012/DrNeha_Lecture1.pdf" },
        ],
      },
    },
  },
  ECE4006: {
    name: "Sensors And IoT",
    folders: {
      "Teacher Materials": {
        "Dr. Rohit Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ECE4006/DrRohit_Lecture1.pdf" },
        ],
      },
    },
  },
  ENG3001: {
    name: "Introduction to Computational Linguistics",
    folders: {
      "Teacher Materials": {
        "Dr. Priyanka Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/ENG3001/DrPriyanka_Lecture1.pdf" },
        ],
      },
    },
  },
  MEA3015: {
    name: "Unmanned Aerial Vehicles",
    folders: {
      "Teacher Materials": {
        "Dr. Arvind Kapoor": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MEA3015/DrArvind_Lecture1.pdf" },
        ],
      },
    },
  },
  BMT1013: {
    name: "Human Resource Management",
    folders: {
      "Teacher Materials": {
        "Dr. Pooja Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/BMT1013/DrPooja_Lecture1.pdf" },
        ],
      },
    },
  },
  BMT2017: {
    name: "International Business",
    folders: {
      "Teacher Materials": {
        "Dr. Sanjay Kumar": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/BMT2017/DrSanjay_Lecture1.pdf" },
        ],
      },
    },
  },
  HUM1002: {
    name: "Emotional Intelligence",
    folders: {
      "Teacher Materials": {
        "Dr. Priya Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/HUM1002/DrPriya_Lecture1.pdf" },
        ],
      },
    },
  },
  HUM2001: {
    name: "Behavioural Science",
    folders: {
      "Teacher Materials": {
        "Dr. Ramesh Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/HUM2001/DrRamesh_Lecture1.pdf" },
        ],
      },
    },
  },
  MGT1002: {
    name: "Principles of Management and Organizational Behaviour",
    folders: {
      "Teacher Materials": {
        "Dr. Neeta Kapoor": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MGT1002/DrNeeta_Lecture1.pdf" },
        ],
      },
    },
  },
  MGT2003: {
    name: "Technology Entrepreneurship",
    folders: {
      "Teacher Materials": {
        "Dr. Anjali Sharma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/MGT2003/DrAnjali_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE0001: {
    name: "Digital Literacy",
    folders: {
      "Teacher Materials": {
        "Dr. Rahul Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE0001/DrRahul_Lecture1.pdf" },
        ],
      },
    },
  },
  CSE0002: {
    name: "Open Source Software (Linux Administration)",
    folders: {
      "Teacher Materials": {
        "Dr. Kavita Bansal": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/CSE0002/DrKavita_Lecture1.pdf" },
        ],
      },
    },
  },
  EXC0001: {
    name: "Extra Curricular Activities",
    folders: {
      "Teacher Materials": {
        "Dr. Meenakshi Verma": [
          { id: 1, name: "Project Guidelines", file: "/downloads/EXC0001/DrMeenakshi_Guidelines.pdf" },
        ],
      },
    },
  },
  HUM0001: {
    name: "Ethics And Values",
    folders: {
      "Teacher Materials": {
        "Dr. Raghav Mehta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/HUM0001/DrRaghav_Lecture1.pdf" },
        ],
      },
    },
  },
  HUM0002: {
    name: "Swachh Bharat",
    folders: {
      "Teacher Materials": {
        "Dr. Rohit Kumar": [
          { id: 1, name: "Project Guidelines", file: "/downloads/HUM0002/DrRohit_Guidelines.pdf" },
        ],
      },
    },
  },
  HUM0003: {
    name: "Indian Constitution",
    folders: {
      "Teacher Materials": {
        "Dr. Alok Gupta": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/HUM0003/DrAlok_Lecture1.pdf" },
        ],
      },
    },
  },
  HUM0004: {
    name: "Indian Heritage",
    folders: {
      "Teacher Materials": {
        "Dr. Sneha Verma": [
          { id: 1, name: "Lecture Notes 1", file: "/downloads/HUM0004/DrSneha_Lecture1.pdf" },
        ],
      },
    },
  },
          
};

export default subjects;
