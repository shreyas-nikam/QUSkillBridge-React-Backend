const courses = [
    {
        "app_code": "NIST",
        "app_name": "NIST AI - Adversarial Machine Learning",
        "app_image_location": "qu-nist/course-image/course-image.jpg",
        "home_page_introduction": "### Introduction  \n- The spectrum of effective attacks against ML is wide, rapidly evolving, and covers all phases of the ML life cycle - from design and implementation to training, testing, and finally, to deployment in the real world.  \n- This demo is intended to be a step toward developing a taxonomy and terminology of adversarial machine learning (AML), which in turn may aid in securing applications of artificial intelligence (AI) against adversarial manipulations of AI systems.  \n- We adopt the notions of security, resilience, and robustness of ML systems from the NIST AI Risk Management Framework  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-nist/test/key-takeaways.html)  \n#### Reference PDF:  \n[NIST AI Publication](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf)",
        "short_description": "A step toward developing a taxonomy and terminology of adversarial machine learning (AML), which in turn may aid in securing applications of artificial intelligence (AI) against adversarial manipulations of AI systems.",
        "document_link": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf",
        "s3_location": "qucoursify/qu-nist/test",
        "local_videos_path": "./data/NIST/videos",
        "local_slides_path": "./data/NIST/slides",
        "local_transcripts_path": "./data/NIST/transcripts",
        "last_updated_json": "data/NIST/last_updated.json",
        "local_path": "NIST",
        "chat_bot_starter_follow_up_questions": [
            "What are White-box evasion attacks in Adversarial Machine Learning?",
            "Tell me more about Availability Poisoning and give me some examples.",
            "Give me some strategies to mitigate evasion attacks in AML."
        ],
        "retriever_db_path": "./data/NIST/retriever/",
        "hybrid_db_path": "./data/NIST/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file_path": "./data/NIST/questions.json",
        "certificate_path": "./data/NIST/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/NIST/slides/Introduction.pdf",
            "./data/NIST/slides/Predictive AI Taxonomy.pdf",
            "./data/NIST/slides/Generative AI Taxonomy.pdf",
            "./data/NIST/slides/Discussion and Remaining Challenges.pdf"
        ],
        "course_names_videos": [
            "1. Introduction",
            "2. Predictive AI Taxonomy",
            "3. Generative AI Taxonomy",
            "4. Discussion and Remaining Challenges"
        ],
        "course_names_slides": [
            "1. Introduction",
            "2. Predictive AI Taxonomy",
            "3. Generative AI Taxonomy",
            "4. Discussion and Remaining Challenges"
        ],
        "videos_links": [
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037260?h=5f33d3ec34&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Introduction'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037656?h=66a3f4d2f8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Predictive AI Taxonomy'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037045?h=e201b5a7b0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Generative AI Taxonomy'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036999?h=9f2c4e6597&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Discussion and Remaining Challenges'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/NIST/transcripts/transcript_1.txt",
            "./data/NIST/transcripts/transcript_2.txt",
            "./data/NIST/transcripts/transcript_3.txt",
            "./data/NIST/transcripts/transcript_4.txt"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link"
    },
    {
        "app_code": "AIRMF",
        "app_name": "NIST AI and Risk Management Framework",
        "app_image_location": "qu-airmf/course-image/AIRMF.jpg",
        "home_page_introduction": " ### Introduction \n- In collaboration with the private and public sectors, NIST has created a companion AI RMF playbook  for voluntary use which suggests ways to navigate and use the [AI Risk Management Framework (AI RMF)](https://www.nist.gov/itl/ai-risk-management-framework) to incorporate trustworthiness considerations in the design, development, deployment, and use of AI systems.  \n- The Playbook is based on AI RMF 1.0 (released on January 26, 2023). It includes suggested actions, references, and related guidance to achieve the outcomes for the four functions in the AI RMF: Govern, Map, Measure, and Manage. Playbook suggestions are developed based on best practices and research insights.  \n- The AI RMF and the Playbook are intended for voluntary use. Organizations may utilize this information by borrowing as many \u00e2\u20ac\u201c or as few \u00e2\u20ac\u201c suggestions as apply to their industry use case or interests.  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-airmf/test/key-takeaways.html)  \n#### Reference PDF:  \n[AI RMF Playbook](https://airc.nist.gov/docs/AI_RMF_Playbook.pdf)",
        "short_description": "Companion AI RMF playbook for voluntary use which suggests ways to navigate and use the AI Risk Management Framework.",
        "document_link": "https://airc.nist.gov/docs/AI_RMF_Playbook.pdf",
        "s3_location": "qucoursify/qu-airmf/test",
        "local_videos_path": "./data/AIRMF/videos",
        "local_slides_path": "./data/AIRMF/slides",
        "local_transcripts_path": "./data/AIRMF/transcripts",
        "last_updated_json": "data/AIRMF/last_updated.json",
        "local_path": "AIRMF",
        "chat_bot_starter_follow_up_questions": [
            "What are some suggested actions for designing organizational AI risk management policies?",
            "What do impact assessments help in understanding?",
            "What questions can organizations document related to AI risk tolerance decisions?"
        ],
        "retriever_db_path": "./data/AIRMF/retriever/",
        "hybrid_db_path": "./data/AIRMF/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/AIRMF/questions.json",
        "certificate_path": "./data/AIRMF/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/AIRMF/slides/GOVERN 1.pdf",
            "./data/AIRMF/slides/GOVERN 2.pdf",
            "./data/AIRMF/slides/GOVERN 3.pdf",
            "./data/AIRMF/slides/GOVERN 4.pdf",
            "./data/AIRMF/slides/GOVERN 5.pdf",
            "./data/AIRMF/slides/GOVERN 6.pdf",
            "./data/AIRMF/slides/MAP 1.pdf",
            "./data/AIRMF/slides/MAP 2.pdf",
            "./data/AIRMF/slides/MAP 3.pdf",
            "./data/AIRMF/slides/MAP 4.pdf",
            "./data/AIRMF/slides/MAP 5.pdf",
            "./data/AIRMF/slides/MEASURE 1.pdf",
            "./data/AIRMF/slides/MEASURE 2.pdf",
            "./data/AIRMF/slides/MEASURE 3.pdf",
            "./data/AIRMF/slides/MEASURE 4.pdf",
            "./data/AIRMF/slides/MANAGE 1.pdf",
            "./data/AIRMF/slides/MANAGE 2.pdf",
            "./data/AIRMF/slides/MANAGE 3.pdf",
            "./data/AIRMF/slides/MANAGE 4.pdf"
        ],
        "course_names_slides": [
            "1. GOVERN 1",
            "2. GOVERN 2",
            "3. GOVERN 3",
            "4. GOVERN 4",
            "5. GOVERN 5",
            "6. GOVERN 6",
            "7. MAP 1",
            "8. MAP 2",
            "9. MAP 3",
            "10. MAP 4",
            "11. MAP 5",
            "12. MEASURE 1",
            "13. MEASURE 2",
            "14. MEASURE 3",
            "15. MEASURE 4",
            "16. MANAGE 1",
            "17. MANAGE 2",
            "18. MANAGE 3",
            "19. MANAGE 4"
        ],
        "course_names_videos": [
            "1. GOVERN 1",
            "2. GOVERN 2",
            "3. GOVERN 3",
            "4. GOVERN 4",
            "5. GOVERN 5",
            "6. GOVERN 6",
            "7. MAP 1",
            "8. MAP 2",
            "9. MAP 3",
            "10. MAP 4",
            "11. MAP 5",
            "12. MEASURE 1",
            "13. MEASURE 2",
            "14. MEASURE 3",
            "15. MEASURE 4",
            "16. MANAGE 1",
            "17. MANAGE 2",
            "18. MANAGE 3",
            "19. MANAGE 4"
        ],
        "videos_links": [
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037117?h=ea83287f4b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='GOVERN 1'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037163?h=e4cabddb98&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='GOVERN 2'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037183?h=ab768ec578&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='GOVERN 3'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037206?h=d1bfc02238&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='GOVERN 4'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037229?h=4eed642875&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='GOVERN 5'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037244?h=87eb2cc610&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='GOVERN 6'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037349?h=b8fc6a9ca8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MAP 1'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037395?h=e700c53671&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MAP 2'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037445?h=4821cc5c68&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MAP 3'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037479?h=6267450fbc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MAP 4'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037502?h=47a8b27b60&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MAP 5'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037522?h=4a93fa7ad5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MEASURE 1'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037535?h=8b4cce3a41&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MEASURE 2'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037608?h=0856149228&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MEASURE 3'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037631?h=c241259e80&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MEASURE 4'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037271?h=3996887c22&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MANAGE 1'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037293?h=d2b4a17240&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MANAGE 2'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037321?h=9c4b524cb7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MANAGE 3'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930037338?h=48d9cfe5c8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='MANAGE 4'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/AIRMF/transcripts/transcript_GOVERN_1.txt",
            "./data/AIRMF/transcripts/transcript_GOVERN_2.txt",
            "./data/AIRMF/transcripts/transcript_GOVERN_3.txt",
            "./data/AIRMF/transcripts/transcript_GOVERN_4.txt",
            "./data/AIRMF/transcripts/transcript_GOVERN_5.txt",
            "./data/AIRMF/transcripts/transcript_GOVERN_6.txt",
            "./data/AIRMF/transcripts/transcript_MAP_1.txt",
            "./data/AIRMF/transcripts/transcript_MAP_2.txt",
            "./data/AIRMF/transcripts/transcript_MAP_3.txt",
            "./data/AIRMF/transcripts/transcript_MAP_4.txt",
            "./data/AIRMF/transcripts/transcript_MAP_5.txt",
            "./data/AIRMF/transcripts/transcript_MEASURE_1.txt",
            "./data/AIRMF/transcripts/transcript_MEASURE_2.txt",
            "./data/AIRMF/transcripts/transcript_MEASURE_3.txt",
            "./data/AIRMF/transcripts/transcript_MEASURE_4.txt",
            "./data/AIRMF/transcripts/transcript_MANAGE_1.txt",
            "./data/AIRMF/transcripts/transcript_MANAGE_2.txt",
            "./data/AIRMF/transcripts/transcript_MANAGE_3.txt",
            "./data/AIRMF/transcripts/transcript_MANAGE_4.txt"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link"
    },
    {
        "app_code": "AIBDI",
        "app_name": "AI and Big Data Applications in Investments",
        "home_page_introduction": "### Introduction  \nThe course will delve into the transformative impact of AI and big data on the investment landscape, covering key concepts, applications, and practical strategies for implementing AI-driven solutions in investment management.   \n##### Course Overview:  \n- Introduction to AI and Big Data in Finance: Overview of foundational AI and machine learning concepts and their specific applications in financial investment strategies.  \n- Machine Learning and Data Science Applications: Deep dive into how these technologies are reshaping asset management, risk assessment, and trading strategies.  \n- Natural Language Processing (NLP) Applications: Explore how NLP is used to glean insights from financial documents and data, enhancing decision-making processes.  \n- Trading Algorithms and Models: Examination of how AI models are used to optimize trading strategies and execution.  \n- Regulatory and Ethical Considerations: Discuss the ethical implications and regulatory challenges associated with deploying AI and big data in investments.  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-aibdi/test/key-takeaways.html)  \n#### Reference PDF:  \n[AI and Big Data in Investments](https://rpc.cfainstitute.org/-/media/documents/article/rf-brief/ai-and-big-data-in-investments.pdf)",
        "short_description": "Delve into the transformative impact of AI and big data on the investment landscape, covering key concepts, applications, and practical strategies for implementing AI-driven solutions in investment management.",
        "app_image_location": "qu-aibdi/course-image/course-image.jpg",
        "document_link": "https://rpc.cfainstitute.org/-/media/documents/article/rf-brief/ai-and-big-data-in-investments.pdf",
        "s3_location": "qucoursify/qu-aibdi/test",
        "local_videos_path": "./data/AIBDI/videos",
        "local_slides_path": "./data/AIBDI/slides",
        "local_transcripts_path": "./data/AIBDI/transcripts",
        "last_updated_json": "data/AIBDI/last_updated.json",
        "local_path": "AIBDI",
        "chat_bot_starter_follow_up_questions": [
            "What are some of the applications of NLU in Investments?",
            "Tell me more about Knowledge Graphs.",
            "What is Intelligent Customer Service in Insurance?"
        ],
        "retriever_db_path": "./data/AIBDI/retriever/",
        "hybrid_db_path": "./data/AIBDI/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/AIBDI/questions.json",
        "certificate_path": "./data/AIBDI/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/AIBDI/slides/1 On Machine Learning Applications In Investments.pdf",
            "./data/AIBDI/slides/2 Alternative Data and AI in Investment Research.pdf",
            "./data/AIBDI/slides/3 Data Science for Active and Long-Term Fundamental Investing.pdf",
            "./data/AIBDI/slides/4 Unlocking Insights and Opportunities.pdf",
            "./data/AIBDI/slides/5 Advances in Natural Language Understanding for Investment Management.pdf",
            "./data/AIBDI/slides/6 Extracting Text-Based ESG Insights - A Hands-on Guide.pdf",
            "./data/AIBDI/slides/7 Machine Learning and Big Data Trade Execution Support.pdf",
            "./data/AIBDI/slides/8 Machine Learning for Microstructure Data-Driven Execution Algorithms.pdf",
            "./data/AIBDI/slides/9 Intelligent Customer Service in Finance.pdf",
            "./data/AIBDI/slides/10 Accelerated AI and Use Cases in Investment Management.pdf",
            "./data/AIBDI/slides/11 Symbolic AI - A Case Study.pdf"
        ],
        "course_names_slides": [
            "1. On Machine Learning Applications In Investments",
            "2. Alternative Data and AI in Investment Research",
            "3. Data Science for Active and Long-Term Fundamental Investing",
            "4. Unlocking Insights and Opportunities",
            "5. Advances in Natural Language Understanding for Investment Management",
            "6. Extracting Text-Based ESG Insights - A Hands-on Guide",
            "7. Machine Learning and Big Data Trade Execution Support",
            "8. Machine Learning for Microstructure Data-Driven Execution Algorithms",
            "9. Intelligent Customer Service in Finance",
            "10. Accelerated AI and Use Cases in Investment Management",
            "11. Symbolic AI - A Case Study"
        ],
        "course_names_videos": [
            "1. On Machine Learning Applications In Investments",
            "2. Alternative Data and AI in Investment Research",
            "3. Data Science for Active and Long-Term Fundamental Investing",
            "4. Unlocking Insights and Opportunities",
            "5. Advances in Natural Language Understanding for Investment Management",
            "6. Extracting Text-Based ESG Insights - A Hands-on Guide",
            "7. Machine Learning and Big Data Trade Execution Support",
            "8. Machine Learning for Microstructure Data-Driven Execution Algorithms",
            "9. Intelligent Customer Service in Finance",
            "10. Accelerated AI and Use Cases in Investment Management",
            "11. Symbolic AI - A Case Study"
        ],
        "videos_links": [
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036343?h=eafe6c3667&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='1 On Machine Learning Applications In Investments'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036402?h=e1569cd689&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='2 Alternative Data and AI in Investment Research'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036471?h=178b093d1b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3 Data Science for Active and Long-Term Fundamental Investing'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036576?h=499e924278&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='4 Unlocking Insights and Opportunities'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036646?h=f44d5d41ad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='5 Advances in Natural Language Understanding for Investment Management'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036739?h=623d49f05f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='6 Extracting Text-Based ESG Insights - A Hands-on Guide'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036810?h=f0eaa2f2f0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='7 Machine Learning and Big Data Trade Execution Support'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036829?h=917b7a8037&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='8 Machine Learning for Microstructure Data-Driven Execution Algorithms'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036849?h=f832236f67&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='9 Intelligent Customer Service in Finance'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036925?h=afb988db7d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='10 Accelerated AI and Use Cases in Investment Management'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036950?h=d0dc1dfdd5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='11 Symbolic AI - A Case Study'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/AIBDI/transcripts/1 On Machine Learning Applications In Investments.txt",
            "./data/AIBDI/transcripts/2 Alternative Data and AI in Investment Research.txt",
            "./data/AIBDI/transcripts/3 Data Science for Active and Long-Term Fundamental Investing.txt",
            "./data/AIBDI/transcripts/4 Unlocking Insights and Opportunities.txt",
            "./data/AIBDI/transcripts/5 Advances in Natural Language Understanding for Investment Management.txt",
            "./data/AIBDI/transcripts/6 Extracting Text-Based ESG Insights - A Hands-on Guide.txt",
            "./data/AIBDI/transcripts/7 Machine Learning and Big Data Trade Execution Support.txt",
            "./data/AIBDI/transcripts/8 Machine Learning for Microstructure Data-Driven Execution Algorithms.txt",
            "./data/AIBDI/transcripts/9 Intelligent Customer Service in Finance.txt",
            "./data/AIBDI/transcripts/10 Accelerated AI and Use Cases in Investment Management.txt",
            "./data/AIBDI/transcripts/11 Symbolic AI - A Case Study.txt"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link"
    },
    {
        "app_code": "AEDT",
        "app_name": "New York 144 Law on Automated Employment Decision Tools (AEDT)",
        "app_image_location": "qu-aedt/course-image/course-image.jpg",
        "home_page_introduction": "### Introduction  \n- The Department of Consumer and Worker Protection (DCWP) is implementing rules for automated employment decision tools (AEDTs) based on [Local Law 144 of 2021](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page).  \n- AEDTs cannot be used by employers or employment agencies without undergoing a bias audit and making the audit results public.  \n- The bias audit must analyze selection rates for different demographic groups and compare them to detect potential biases.  \n- Rules clarify terms, audit requirements, publication standards for audit results, and notice obligations for employees and job candidates.  \n- Overall, the rules aim to ensure compliance with the law and promote fairness in employment practices involving AEDTs.  \n- It is a process conducted by employers or employment agencies to assess the fairness of an automated employment decision tool (AEDT) in selecting candidates for employment or promotion.  \n- It ensures that AEDTs don't unfairly discriminate based on sex, race/ethnicity, or intersectional categories by analyzing selection or scoring patterns and comparing them across demographic groups.  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-aedt/test/key-takeaways.html)  \n#### Reference PDF:  \n[Local Law 144 of 2021](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page)",
        "short_description": "DCWP is implementing rules for automated employment decision tools (AEDTs) based on Local Law 144 of 2021.",
        "document_link": "https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page",
        "s3_location": "qucoursify/qu-aedt/test",
        "local_videos_path": "./data/AEDT/videos",
        "local_slides_path": "./data/AEDT/slides",
        "local_transcripts_path": "./data/AEDT/transcripts",
        "last_updated_json": "data/AEDT/last_updated.json",
        "local_path": "AEDT",
        "chat_bot_starter_follow_up_questions": [
            "What is required by Local Law 144 of 2021 for automated employment decision tools?",
            "Tell me more about Data Requirements for the Bias Audit.",
            "What is selection rate in context of AEDT? Give me an example."
        ],
        "retriever_db_path": "./data/AEDT/retriever/",
        "hybrid_db_path": "./data/AEDT/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/AEDT/questions.json",
        "certificate_path": "./data/AEDT/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/AEDT/slides/1 Introduction.pdf",
            "./data/AEDT/slides/2 Definitions.pdf",
            "./data/AEDT/slides/3 Bias Audit.pdf",
            "./data/AEDT/slides/4 Summary.pdf"
        ],
        "course_names_slides": [
            "1. Introduction",
            "2. Definitions",
            "3. Bias Audit",
            "4. Summary"
        ],
        "course_names_videos": [
            "1. Introduction",
            "2. Definitions",
            "3. Bias Audit",
            "4. Summary"
        ],
        "videos_links": [
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036330?h=f5bf250537&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='1 Introduction'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036417?h=4421e9927a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='2 Definitions'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036455?h=8b9d25145d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3 Bias Audit'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/930036540?h=b33426ff8b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='4 Summary'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/AEDT/transcripts/transcript_1 Introduction.txt",
            "./data/AEDT/transcripts/transcript_2 Definitions.txt",
            "./data/AEDT/transcripts/transcript_3 Bias Audit.txt",
            "./data/AEDT/transcripts/transcript_4 Summary.txt"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link"
    },
    {
        "app_code": "CONSU",
        "app_name": "QU - Contract Extractor",
        "app_image_location": "qu-consu/course-image/CONSU.jpg",
        "s3_location": "qucoursify/qu-consu/test",
        "local_path": "CONSU",
        "home_page_introduction": "### Introduction  \n Welcome to the Contract Chatbot App! This innovative tool revolutionizes the way you handle contracts by seamlessly extracting information and providing a chatbot interface for effortless interaction. Here's how it works:\n\n1. **Upload**: Begin by uploading your contract document on the Contract Summarizer page.\n2. **Extraction**: Our advanced algorithms swiftly parse through the document to extract essential information.\n3. **Initiate Chatbot**: Once extraction is complete, seamlessly transition to the chatbot interface.\n4. **Interact**: Engage with the chatbot to explore, discuss, and clarify any details within the contract.",
        "short_description": "Revolutionizes the way you handle contracts by seamlessly extracting information and providing a chatbot interface for effortless interaction.",
        "document_link": "Contract Summarizer Section of the Demo",
        "chat_bot_starter_follow_up_questions": [
            "What is the role of the Contractor in this agreement?",
            "What are the terms and conditions for the contract?",
            "Give details about the parties in the contract ?"
        ],
        "CONTENT_SAMPLE_TXT": "./data/CONSU/sample.txt",
        "retriever_db_path": "./data/CONSU/retriever/",
        "hybrid_db_path": "./data/CONSU/retriever/hybrid_db",
        "chatbot_questions_limit": 5
    },
    {
        "app_code": "AGIRM",
        "app_name": "White House Federal Agency Use of Artificial Intelligence Executive Order Awareness Course",
        "app_image_location": "qu-agirm/course-image/Course Image.jpg",
        "home_page_introduction": "### Introduction  \nThe course on AI governance and innovation in the Federal Government will cover the following key points:  \n- AI Governance in the Federal Sector  \n- Advancing Responsible AI Innovation  \n- AI Risk Management  \n- Federal AI Procurement and Risk Management Recommendations  \n- Legislative and Executive Frameworks for AI  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-agirm/test/key-takeaways.html)  \n#### Reference PDF:  \n[White House Memorandum](https://www.whitehouse.gov/wp-content/uploads/2024/03/M-24-10-Advancing-Governance-Innovation-and-Risk-Management-for-Agency-Use-of-Artificial-Intelligence.pdf)",
        "short_description": "Covers AI governance and innovation in the Federal Government.",
        "document_link": "https://www.whitehouse.gov/wp-content/uploads/2024/03/M-24-10-Advancing-Governance-Innovation-and-Risk-Management-for-Agency-Use-of-Artificial-Intelligence.pdf",
        "s3_location": "qucoursify/qu-agirm/test",
        "local_videos_path": "./data/AGIRM/videos",
        "local_slides_path": "./data/AGIRM/slides",
        "local_transcripts_path": "./data/AGIRM/transcripts",
        "last_updated_json": "data/AGIRM/last_updated.json",
        "local_path": "AGIRM",
        "chat_bot_starter_follow_up_questions": [
            "Which of the roles is expected to manage AI risk and advance innovation in the agencies?",
            "Does the memorandum apply to all the agencies?",
            "What is the definition of 'agency' according to this memorandum?"
        ],
        "retriever_db_path": "./data/AGIRM/retriever/",
        "hybrid_db_path": "./data/AGIRM/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/AGIRM/questions.json",
        "certificate_path": "./data/AGIRM/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/AGIRM/slides/1 Overview.pdf",
            "./data/AGIRM/slides/2 Scope.pdf",
            "./data/AGIRM/slides/3 Strengthening Artificial Intelligence Governance.pdf",
            "./data/AGIRM/slides/4 Advancing Responsible Artificial Intelligence Innovation.pdf",
            "./data/AGIRM/slides/5 Managing Risks from the use of artificial intelligence.pdf",
            "./data/AGIRM/slides/6 Definitions.pdf",
            "./data/AGIRM/slides/Appendix.pdf",
            "./data/AGIRM/slides/Draft.pdf"
        ],
        "course_names_slides": [
            "1. Overview",
            "2. Scope",
            "3. Strengthening Artificial Intelligence Governance",
            "4. Advancing Responsible Artificial Intelligence Innovation",
            "5. Managing Risks from the use of artificial intelligence",
            "6. Definitions",
            "Appendix",
            "Draft"
        ],
        "course_names_videos": [
            "1. Overview",
            "2. Scope",
            "3. Strengthening Artificial Intelligence Governance",
            "4. Advancing Responsible Artificial Intelligence Innovation",
            "5. Managing Risks from the use of artificial intelligence"
        ],
        "videos_links": [
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/932597719?h=ba54b55819&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='1 Overview'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/932597742?h=bf2f5fd58b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='2 Scope'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/932597759?h=e04593cdbe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3 Strengthening Artificial Intelligence Governance'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/932597794?h=260ff8494a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='4 Advancing Responsible Artificial Intelligence Innovation'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.24% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/932615478?h=eee3a62dbe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='5 Managing Risks from the use of artificial intelligence'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/AGIRM/transcripts/1 Overview.txt",
            "./data/AGIRM/transcripts/2 Scope.txt",
            "./data/AGIRM/transcripts/3 Strengthening Artificial Intelligence Governance.txt",
            "./data/AGIRM/transcripts/4 Advancing Responsible Artificial Intelligence Innovation.txt",
            "./data/AGIRM/transcripts/5 Managing Risks from the use of artificial intelligence.txt"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link"
    },
    {
        "app_code": "SCFACO",
        "app_name": "Quantitative methods in Finance",
        "app_image_location": "qu-scfaco/course-image/SCFACO.jpg",
        "home_page_introduction": "- In this course, we will review   \n    - Hypothesis Testing and Regression Analysis   \n    - Introduction to Big Data Techniques   \n    - Understanding Rates and Returns   \n- After completion of the module, you can use the QUBot for additional qustions.  \n- Complete the Assessment to get certified for the course.  \n- You can use the feedback page to reach out to us with any additional feedback.",
        "short_description": "In this course, we will review Hypothesis Testing and Regression Analysis, Introduction to Big Data Techniques, and Understanding Rates and Returns.",
        "document_link": "www.quantuniversity.com",
        "s3_location": "qucoursify/qu-scfaco/test",
        "local_videos_path": "./data/SCFACO/videos",
        "local_slides_path": "./data/SCFACO/slides",
        "local_transcripts_path": "./data/SCFACO/transcripts",
        "last_updated_json": "./data/SCFACO/last_updated.json",
        "local_path": "SCFACO",
        "chat_bot_starter_follow_up_questions": [],
        "retriever_db_path": "./data/SCFACO/retriever",
        "hybrid_db_path": "./data/SCFACO/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/SCFACO/questions.json",
        "certificate_path": "./data/SCFACO/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/SCFACO/slides/Hypothesis Testing and Regression Analysis.pdf",
            "./data/SCFACO/slides/Introduction to Big Data Techniques.pdf",
            "./data/SCFACO/slides/Understanding Rates and Returns.pdf"
        ],
        "videos_links": [
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/964672858?h=2fa28f3372&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Hypothesis Testing and Regression Analysis'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/964672785?h=6f18ad9553&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Introduction to Big Data Techniques'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/964672696?h=c40f2cfb25&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Understanding Rates and Returns'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/SCFACO/transcripts/transcript_Hypothesis Testing and Regression Analysis.md",
            "./data/SCFACO/transcripts/transcript_Introduction to Big Data Techniques.md",
            "./data/SCFACO/transcripts/transcript_Understanding Rates and Returns.md"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "course_names_slides": [
            "Hypothesis Testing and Regression Analysis",
            "Introduction to Big Data Techniques",
            "Understanding Rates and Returns"
        ],
        "course_names_videos": [
            "Hypothesis Testing and Regression Analysis",
            "Introduction to Big Data Techniques",
            "Understanding Rates and Returns"
        ]
    },
    {
        "app_code": "SGMRM",
        "app_name": "SR11-7 Supervisory Guide on Model Risk Management Course",
        "app_image_location": "qu-sgmrm/course-images/SR11-7 SGMRM.png",
        "home_page_introduction": "### Introduction  \nThe course provides comprehensive guidance on effective model risk management in banking, emphasizing the critical roles of model development, implementation, use, and validation, as well as strong governance and controls.  \n- The course discusses the significance of models in banking for decision-making and the management of model risk due to potential inaccuracies or misuse.  \n- It outlines a framework for robust model development, implementation, and use, highlighting the importance of clear purpose, rigorous testing, and ongoing adjustments based on feedback.  \n- Model validation is detailed as a crucial process to ensure models perform as expected, with validation activities adapted to the complexity and risk of the model.  \n- Governance, policies, and controls are emphasized as essential for an effective model risk management framework, including responsibilities of the board, senior management, and the need for comprehensive documentation and internal audit functions.  \n- It mentions the use of vendor and third-party models, stressing the need for careful selection, validation, and contingency planning.  \n- The course concludes by reinforcing the need for banks to align their practices with the principles provided for managing model risk effectively.  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-sgmrm/test/key-takeaways.html)  \n#### Reference PDF:  \n[SR 11-7 Document](https://www.federalreserve.gov/supervisionreg/srletters/sr1107a1.pdf)",
        "short_description": "Provides comprehensive guidance on effective model risk management in banking.",
        "document_link": "https://www.federalreserve.gov/supervisionreg/srletters/sr1107a1.pdf",
        "s3_location": "qucoursify/qu-sgmrm/test",
        "local_videos_path": "./data/SGMRM/videos",
        "local_slides_path": "./data/SGMRM/slides",
        "local_transcripts_path": "./data/SGMRM/transcripts",
        "last_updated_json": "./data/SGMRM/last_updated.json",
        "local_path": "SGMRM",
        "chat_bot_starter_follow_up_questions": [],
        "retriever_db_path": "./data/SGMRM/retriever",
        "hybrid_db_path": "./data/SGMRM/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/SGMRM/questions.json",
        "certificate_path": "./data/SGMRM/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/SGMRM/slides/1. Introduction.pdf",
            "./data/SGMRM/slides/2. Model Development, Implementation and Use.pdf",
            "./data/SGMRM/slides/3. Model Validation.pdf",
            "./data/SGMRM/slides/4. Governance, Policies, Controls and Conclusion.pdf"
        ],
        "videos_links": [
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/934981377?h=becd00910a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='1. Introduction'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/934981418?h=632d6f07e6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='2. Model Development, Implementation and Use'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/934981450?h=01a8ff3db1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3. Model Validation'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/934981484?h=40b1000dd3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='4. Governance, Policies, Controls and Conclusion'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/SGMRM/transcripts/1. Introduction.txt",
            "./data/SGMRM/transcripts/2. Model Development, Implementation and Use.txt",
            "./data/SGMRM/transcripts/3. Model Validation.txt",
            "./data/SGMRM/transcripts/4. Governance, Policies, Controls and Conclusion.txt"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "course_names_slides": [
            "1. Introduction",
            "2. Model Development, Implementation and Use",
            "3. Model Validation",
            "4. Governance, Policies, Controls and Conclusion"
        ],
        "course_names_videos": [
            "1. Introduction",
            "2. Model Development, Implementation and Use",
            "3. Model Validation",
            "4. Governance, Policies, Controls and Conclusion"
        ]
    },
    {
        "app_code": "GENPRO",
        "app_name": "AI Risk Management Framework: Gen AI profile",
        "app_image_location": "qu-genpro/course-images/course-image.jpg",
        "home_page_introduction": "The course provides a framework for managing risks associated with Generative Artificial Intelligence (GAI). This initial public draft aims to guide organizations in incorporating trustworthy practices into the design, development, and deployment of GAI systems.  \nKey Points:  \n- Identifies 12 unique or exacerbated risks of GAI.  \n- Provides actions for organizations to manage these risks.  \n- Emphasizes the importance of transparency and accountability.  \n- Encourages feedback on glossary terms, risk categorization, and action classification.  \n- Aligns with President Biden's Executive Order on trustworthy AI.  \n- This publication is available for public review and comments until June 2, 2024.  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-genpro/test/key-takeaways.html)  \n#### Reference PDF:  \n[NIST GenAI Profile Document](https://airc.nist.gov/docs/NIST.AI.600-1.GenAI-Profile.ipd.pdf)",
        "short_description": "The course provides a framework for managing risks associated with Generative Artificial Intelligence (GAI).",
        "document_link": "https://airc.nist.gov/docs/NIST.AI.600-1.GenAI-Profile.ipd.pdf",
        "s3_location": "qucoursify/qu-genpro/test",
        "local_videos_path": "./data/GENPRO/videos",
        "local_slides_path": "./data/GENPRO/slides",
        "local_transcripts_path": "./data/GENPRO/transcripts",
        "last_updated_json": "./data/GENPRO/last_updated.json",
        "local_path": "GENPRO",
        "chat_bot_starter_follow_up_questions": [
            "What are some suggested actions for designing organizational AI risk management policies?",
            "What do impact assessments help in understanding?",
            "What questions can organizations document related to AI risk tolerance decisions?"
        ],
        "retriever_db_path": "./data/GENPRO/retriever",
        "hybrid_db_path": "./data/GENPRO/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/GENPRO/questions.json",
        "certificate_path": "./data/GENPRO/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/GENPRO/slides/1. Introduction.pdf",
            "./data/GENPRO/slides/2. Overview of Risks Unique to or Exacerbated by GAI.pdf",
            "./data/GENPRO/slides/3.1 Actions to Manage GAI Risks - Introduction and GOVERN.pdf",
            "./data/GENPRO/slides/3.2 Actions to Manage GAI Risks - MAP.pdf",
            "./data/GENPRO/slides/3.3 Actions to Manage GAI Risks - MEASURE.pdf",
            "./data/GENPRO/slides/3.4 Actions to Manage GAI Risks - MANAGE.pdf",
            "./data/GENPRO/slides/Appendix.pdf"
        ],
        "videos_links": [
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/943272831?h=a2de59debb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='1. Introduction'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/943275254?h=0c068fa30d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='2. Overview of Risks Unique to or Exacerbated by GAI'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/943275433?h=82e801352b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3.1 Actions to Manage GAI Risks - Introduction and GOVERN'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/943275586?h=bee1488ec2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3.2 Actions to Manage GAI Risks - MAP'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/943275716?h=db33c133d5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3.3 Actions to Manage GAI Risks - MEASURE'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/943275852?h=dcbb3a24c0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3.4 Actions to Manage GAI Risks - MANAGE'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/943275975?h=591603aa89&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Appendix'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/GENPRO/transcripts/transcript_1. Introduction.md",
            "./data/GENPRO/transcripts/transcript_2. Overview of Risks Unique to or Exacerbated by GAI.md",
            "./data/GENPRO/transcripts/transcript_3.1 Actions to Manage GAI Risks - Introduction and GOVERN.md",
            "./data/GENPRO/transcripts/transcript_3.2 Actions to Manage GAI Risks - MAP.md",
            "./data/GENPRO/transcripts/transcript_3.3 Actions to Manage GAI Risks - MEASURE.md",
            "./data/GENPRO/transcripts/transcript_3.4 Actions to Manage GAI Risks - MANAGE.md",
            "./data/GENPRO/transcripts/transcript_Appendix.md"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "course_names_slides": [
            "1. Introduction",
            "2. Overview of Risks Unique to or Exacerbated by GAI",
            "3.1 Actions to Manage GAI Risks - Introduction and GOVERN",
            "3.2 Actions to Manage GAI Risks - MAP",
            "3.3 Actions to Manage GAI Risks - MEASURE",
            "3.4 Actions to Manage GAI Risks - MANAGE",
            "Appendix"
        ],
        "course_names_videos": [
            "1. Introduction",
            "2. Overview of Risks Unique to or Exacerbated by GAI",
            "3.1 Actions to Manage GAI Risks - Introduction and GOVERN",
            "3.2 Actions to Manage GAI Risks - MAP",
            "3.3 Actions to Manage GAI Risks - MEASURE",
            "3.4 Actions to Manage GAI Risks - MANAGE",
            "Appendix"
        ]
    },
    {
        "app_code": "SCFACONLP",
        "app_name": "Advanced Natural Language Processing (NLP)",
        "app_image_location": "qu-scfaconlp/course-images/Advanced Natural Language Processing NLP.png",
        "home_page_introduction": "### Introduction  \n- This course covers advanced topics in Natural Language Processing (NLP) and its applications.  \n- The course includes an overview of NLP, deep learning, large language models, and transformers.  \n- You can use the QUBot to ask questions related to the course content.  \n- Complete the assessment to test your understanding and receive a certificate of completion.  \n- For any queries or feedback, please use the feedback form.  \n- Happy learning!",
        "short_description": "This course covers advanced topics in Natural Language Processing (NLP) and its applications.",
        "document_link": "",
        "s3_location": "qucoursify/qu-scfaconlp/test",
        "local_videos_path": "./data/SCFACONLP/videos",
        "local_slides_path": "./data/SCFACONLP/slides",
        "local_transcripts_path": "./data/SCFACONLP/transcripts",
        "last_updated_json": "./data/SCFACONLP/last_updated.json",
        "local_path": "SCFACONLP",
        "chat_bot_starter_follow_up_questions": [],
        "retriever_db_path": "./data/SCFACONLP/retriever",
        "hybrid_db_path": "./data/SCFACONLP/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/SCFACONLP/questions.json",
        "certificate_path": "./data/SCFACONLP/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/SCFACONLP/slides/Advanced Natural Language Processing NLP.pdf"
        ],
        "videos_links": [
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/964672928?h=13f9940e6c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Advanced Natural Language Processing NLP'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/SCFACONLP/transcripts/transcript_Advanced Natural Language Processing NLP.md"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "course_names_slides": [
            "Advanced Natural Language Processing NLP"
        ],
        "course_names_videos": [
            "Advanced Natural Language Processing NLP"
        ]
    },
    {
        "app_code": "PRMST",
        "app_name": "Risk Management Practices - Stress Testing",
        "app_image_location": "qu-prmst/course-images/course-image.jpg",
        "home_page_introduction": "### Introduction  \nThis comprehensive chapter on **Risk Management Practices - Stress Testing** delves into the vital role and evolution of stress testing as a superior approach to traditional risk measures like Value at Risk (VaR). We explore a variety of stress testing techniques\u00e2\u20ac\u201dhistorical, hypothetical, and algorithmic\u00e2\u20ac\u201dto better understand potential extreme losses and enhance financial stability.  \n- **Extensive Coverage**: Examines stress testing across different asset classes and geographies, focusing on key historical and hypothetical scenarios.  \n- **Regulatory Insights**: Discusses the regulatory importance of stress testing and its integration into risk management frameworks mandated by authorities like the Basel Committee.  \n- **Methodological Depth**: Provides detailed methodologies used by major banks for conducting stress tests, including Citigroup and JP Morgan.  \n- **Practical Application**: Offers strategies for integrating stress tests into existing risk frameworks to improve decision-making and capital management.  \n- **Advanced Techniques**: Explores sophisticated algorithmic approaches like Monte Carlo simulations and Extreme-Value Theory to estimate potential losses.  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-prmst/test/key-takeaways.html)  \n#### Reference PDF:  \n[Risk Management Practices PDF](https://drive.google.com/file/d/1EqMenh2VK5wyiBCLkPOhq5map9oJMAN-/view?usp=sharing)",
        "short_description": "This chapter delves into the vital role and evolution of stress testing as a superior approach to traditional risk measures like Value at Risk (VaR).",
        "document_link": "https://drive.google.com/file/d/1EqMenh2VK5wyiBCLkPOhq5map9oJMAN-/view?usp=sharing",
        "s3_location": "qucoursify/qu-prmst/test",
        "local_videos_path": "./data/PRMST/videos",
        "local_slides_path": "./data/PRMST/slides",
        "local_transcripts_path": "./data/PRMST/transcripts",
        "last_updated_json": "./data/PRMST/last_updated.json",
        "local_path": "PRMST",
        "chat_bot_starter_follow_up_questions": [],
        "retriever_db_path": "./data/PRMST/retriever",
        "hybrid_db_path": "./data/PRMST/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/PRMST/questions.json",
        "certificate_path": "./data/PRMST/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/PRMST/pdfs/1 Introduction.pdf",
            "./data/PRMST/pdfs/2 Stress Testing in Practice.pdf",
            "./data/PRMST/pdfs/3 Historical Scenarios.pdf",
            "./data/PRMST/pdfs/4 Algorithmic Approaches to Stress Testing.pdf",
            "./data/PRMST/pdfs/5 Summary and Conclusions.pdf"
        ],
        "videos_links": [
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949477617?h=3f81a7a9e0&badge=0&autopause=0&player_id=0&app_id=58479/embed' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949477634?h=19a6a0f824&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='2 Stress Testing in Practice'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949477654?h=dfb2214d36&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3 Historical Scenarios'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949477672?h=a0c09068c8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='4 Algorithmic Approaches to Stress Testing'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949477680?h=d85f1b55be&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='5 Summary and Conclusions'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/PRMST/transcripts/transcript_1 Introduction.md",
            "./data/PRMST/transcripts/transcript_2 Stress Testing in Practice.md",
            "./data/PRMST/transcripts/transcript_3 Historical Scenarios.md",
            "./data/PRMST/transcripts/transcript_4 Algorithmic Approaches to Stress Testing.md",
            "./data/PRMST/transcripts/transcript_5 Summary and Conclusions.md"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "course_names_slides": [
            "1. Introduction",
            "2. Stress Testing in Practice",
            "3. Historical Scenarios",
            "4. Algorithmic Approaches to Stress Testing",
            "5. Summary and Conclusions"
        ],
        "course_names_videos": [
            "1. Introduction",
            "2. Stress Testing in Practice",
            "3. Historical Scenarios",
            "4. Algorithmic Approaches to Stress Testing",
            "5. Summary and Conclusions"
        ]
    },
    {
        "app_code": "GSCRRMF",
        "app_name": "GARP's SCR Risk-Management Fundamentals Course",
        "app_image_location": "qu-gscrrmf/course-images/course-image.jpg",
        "home_page_introduction": "### Introduction  \nThis course on SCR Risk-Management Fundamentals offers an in-depth exploration of essential risk management techniques within the financial sector. It is designed to equip finance professionals with the tools and knowledge to effectively assess, manage, and mitigate various financial risks.    \n- Comprehensive Coverage: Understand the four main risk types\u00e2\u20ac\u201dcredit, market, liquidity, and operational\u00e2\u20ac\u201dand their impact on financial stability.    \n- Advanced Methodologies: Dive into sophisticated risk assessment methods including stress testing, scenario analysis, and the use of financial models.    \n- Real-World Applications: Learn through case studies and real-world examples to apply risk management strategies effectively in your work environment.    \n- Regulatory Frameworks: Explore the influence of global regulatory frameworks like Basel III on risk management practices.    \n- Tools and Techniques: Gain practical skills in using advanced tools for risk analysis, including Value at Risk (VaR) and stress testing models.  \n#### Key Takeaways: \n[QuIQ Report](https://qucoursify.s3.amazonaws.com/qu-gscrrmf/test/key-takeaways.html)  \n#### Reference PDF:  \n[SCR Risk-Management Fundamentals](https://www.garp.org/hubfs/Website/SCR/PDF/scr-risk-mgmt-fundamentals-112222.pdf)",
        "short_description": "This course offers an in-depth exploration of essential risk management techniques within the financial sector.",
        "document_link": "https://www.garp.org/hubfs/Website/SCR/PDF/scr-risk-mgmt-fundamentals-112222.pdf",
        "s3_location": "qucoursify/qu-gscrrmf/test",
        "local_videos_path": "./data/GSCRRMF/videos",
        "local_slides_path": "./data/GSCRRMF/slides",
        "local_transcripts_path": "./data/GSCRRMF/transcripts",
        "last_updated_json": "./data/GSCRRMF/last_updated.json",
        "local_path": "GSCRRMF",
        "chat_bot_starter_follow_up_questions": [],
        "retriever_db_path": "./data/GSCRRMF/retriever",
        "hybrid_db_path": "./data/GSCRRMF/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/GSCRRMF/questions.json",
        "certificate_path": "./data/GSCRRMF/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/GSCRRMF/pdfs/1 Introduction.pdf",
            "./data/GSCRRMF/pdfs/2 Credit Risk.pdf",
            "./data/GSCRRMF/pdfs/3 Market Risk.pdf",
            "./data/GSCRRMF/pdfs/4 Liquidity Risk.pdf",
            "./data/GSCRRMF/pdfs/5 Operational Risk.pdf",
            "./data/GSCRRMF/pdfs/6 Enterprisewide Risk Management.pdf"
        ],
        "videos_links": [
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949662473?h=f4f92faf47&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='1 Introduction'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949662497?h=cf4161f033&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='2 Credit Risk'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949662534?h=92c2678851&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='3 Market Risk'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949662557?h=eb61d743d1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='4 Liquidity Risk'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949662572?h=2834e38289&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='5 Operational Risk'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>",
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/949662595?h=d00d347a8e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='6 Enterprisewide Risk Management'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/GSCRRMF/transcripts/1 Introduction.md",
            "./data/GSCRRMF/transcripts/2 Credit Risk.md",
            "./data/GSCRRMF/transcripts/3 Market Risk.md",
            "./data/GSCRRMF/transcripts/4 Liquidity Risk.md",
            "./data/GSCRRMF/transcripts/5 Operational Risk.md",
            "./data/GSCRRMF/transcripts/6 Enterprisewide Risk Management.md"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "course_names_slides": [
            "1 Introduction",
            "2 Credit Risk",
            "3 Market Risk",
            "4 Liquidity Risk",
            "5 Operational Risk",
            "6 Enterprisewide Risk Management"
        ],
        "course_names_videos": [
            "1 Introduction",
            "2 Credit Risk",
            "3 Market Risk",
            "4 Liquidity Risk",
            "5 Operational Risk",
            "6 Enterprisewide Risk Management"
        ]
    },
    {
        "app_code": "SROBOM",
        "app_name": "Advanced Software Development for Robotics - Mechatronics",
        "app_image_location": "qu-srobom/course-images/course-image.jpg",
        "home_page_introduction": "### Introduction  \nThe MechaTronics module on Advanced Software Development for Robotics covers the principles of scalable software architecture, types and management of architecture, and the integration of AI and machine learning in industrial applications. It also delves into computer engineering, emphasizing the interplay between hardware and software, and the evolving field of mechatronics.  \n- Focuses on scalable software architecture, including types like monolith and distributed architectures.  \n- Discusses the importance of documenting software architecture and fundamental laws like trade-offs and prioritizing the 'why.'  \n- Highlights hexagonal architecture for creating loosely coupled components to enhance testability and exchangeability.  \n- Covers the role of computer engineering and mechatronics in robotics and automation.  \n- Explores the integration of AI and machine learning to solve industrial challenges and drive innovation.",
        "short_description": "The MechaTronics module on Advanced Software Development for Robotics covers the principles of scalable software architecture, types and management of architecture, and the integration of AI and machine learning in industrial applications.",
        "document_link": "",
        "s3_location": "qucoursify/qu-srobom/test",
        "local_videos_path": "./data/SROBOM/videos",
        "local_slides_path": "./data/SROBOM/slides",
        "local_transcripts_path": "./data/SROBOM/transcripts",
        "last_updated_json": "./data/SROBOM/last_updated.json",
        "local_path": "SROBOM",
        "chat_bot_starter_follow_up_questions": [],
        "retriever_db_path": "./data/SROBOM/retriever",
        "hybrid_db_path": "./data/SROBOM/retriever/hybrid_db",
        "chatbot_questions_limit": 5,
        "questions_file": "./data/SROBOM/questions.json",
        "certificate_path": "./data/SROBOM/QU-Certificate.jpg",
        "quiz_total_ques": 2,
        "quiz_result_table_name": "quiz_results",
        "user_quiz_interaction_table_name": "user_quiz_interaction",
        "slides_links": [
            "./data/SROBOM/pdfs/Advanced Software Development for Robotics.pdf"
        ],
        "videos_links": [
            "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/964672636?h=63d441f100&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Advanced Software Development for Robotics'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        ],
        "transcripts_files": [
            "./data/SROBOM/transcripts/Advanced Software Development for Robotics.md"
        ],
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "course_names_slides": [
            "Advanced Software Development for Robotics"
        ],
        "course_names_videos": [
            "Advanced Software Development for Robotics"
        ]
    },
    {
        "app_name": "Colorado Law Concerning Consumer Protections In Interactions With AI Systems",
        "app_code": "COLCPL",
        "s3_location": "qucoursify/qu-colcpl/test",
        "local_path": "COLCPL",
        "home_page_introduction": "### Coming soon... \nThis course will cover Colorado Law Concerning Consumer Protections In Interactions With AI Systems.  \nStay tuned for more updates!",
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link"
    },
    {
        "app_name": "California AI Transparency ACT",
        "app_code": "CALLAW",
        "s3_location": "qucoursify/CALLAW",
        "s3_bucket_prefix": "qu-callaw/test",
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "home_page_introduction": "### Coming soon... \nThis course will cover California AI Transparency ACT.  \nStay tuned for more updates!"
    },
    {
        "app_name": "EU AI Act",
        "app_code": "EUAIA",
        "s3_location": "qucoursify/EUAIA",
        "s3_bucket_prefix": "qu-euaia/test",
        "contact_form_link": "https://docs.google.com/forms/d/e/1FAIpQLSfWkOK-in_bMMoHSZfcIvAeO58PAH9wrDqcxnJABHaxiDqhSA/viewform?usp=sf_link",
        "home_page_introduction": "### Coming soon... \nThis course will cover EU AI Act.  \nStay tuned for more updates!"
    }
]

export default courses;