// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header for navigation menu
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Calculator functionality
const calcInput = document.getElementById('calc-input');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    try {
        const expression = calcInput.value;
        const result = eval(expression);
        resultDiv.textContent = result;
    } catch (error) {
        resultDiv.textContent = 'Error';
    }
});

// Video player functionality
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        // Add video player functionality here
        console.log('Video clicked:', card.querySelector('h3').textContent);
    });
});

// Practice problems functionality
const practiceButtons = document.querySelectorAll('.practice-card .btn');
practiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add practice problems functionality here
        console.log('Practice started:', button.parentElement.querySelector('h3').textContent);
    });
});

// Forum post functionality
const forumPosts = document.querySelectorAll('.forum-post');
forumPosts.forEach(post => {
    post.addEventListener('click', () => {
        // Add forum post functionality here
        console.log('Forum post clicked:', post.querySelector('h3').textContent);
    });
});

// Practice problems functionality
const initializePracticeProblems = () => {
    const solutionButtons = document.querySelectorAll('.show-solution');
    solutionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const problem = button.closest('.problem');
            const solution = problem.querySelector('.solution');
            
            if (solution) {
                solution.classList.toggle('hidden');
                button.textContent = solution.classList.contains('hidden') ? 'Show Solution' : 'Hide Solution';
            }
        });
    });
};

// Video player functionality
const initializeVideoPlayer = () => {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoTitle = card.querySelector('h3').textContent;
            const videoDescription = card.querySelector('p').textContent;
            
            // Create modal for video player
            const modal = document.createElement('div');
            modal.className = 'video-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${videoTitle}</h2>
                    <p>${videoDescription}</p>
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Video player will be implemented here</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal functionality
            const closeButton = modal.querySelector('.close-modal');
            closeButton.addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
};

// Forum functionality
const initializeForum = () => {
    const forumPosts = document.querySelectorAll('.forum-post');
    forumPosts.forEach(post => {
        post.addEventListener('click', () => {
            const postTitle = post.querySelector('h3').textContent;
            const postContent = post.querySelector('p').textContent;
            
            // Create modal for forum post
            const modal = document.createElement('div');
            modal.className = 'forum-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${postTitle}</h2>
                    <p>${postContent}</p>
                    <div class="replies-section">
                        <h3>Replies</h3>
                        <div class="reply-form">
                            <textarea placeholder="Write your reply..."></textarea>
                            <button class="submit-reply">Submit Reply</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal functionality
            const closeButton = modal.querySelector('.close-modal');
            closeButton.addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
};

// Add CSS for modals
const addModalStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .video-modal, .forum-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            max-width: 800px;
            width: 90%;
            position: relative;
        }
        
        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        .video-placeholder {
            background-color: #f5f6fa;
            padding: 2rem;
            text-align: center;
            margin-top: 1rem;
            border-radius: 4px;
        }
        
        .video-placeholder i {
            font-size: 3rem;
            color: var(--secondary-color);
            margin-bottom: 1rem;
        }
        
        .replies-section {
            margin-top: 2rem;
        }
        
        .reply-form {
            margin-top: 1rem;
        }
        
        .reply-form textarea {
            width: 100%;
            padding: 1rem;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            margin-bottom: 1rem;
            resize: vertical;
        }
        
        .submit-reply {
            background-color: var(--secondary-color);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .submit-reply:hover {
            background-color: var(--primary-color);
        }
    `;
    document.head.appendChild(style);
};

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add modal styles
    addModalStyles();
    
    // Initialize calculator
    const calculator = new Calculator();
    
    // Initialize other functionality
    initializePracticeProblems();
    initializeVideoPlayer();
    initializeForum();
    
    // Load content
    loadFormulaSheet();
    loadVideos();
    loadPracticeProblems();
    loadForumPosts();
});

// Module content loading
const loadModuleContent = async (moduleId) => {
    try {
        const response = await fetch(`/api/modules/${moduleId}`);
        const data = await response.json();
        // Add content to DOM
    } catch (error) {
        console.error('Error loading module content:', error);
    }
};

// Formula sheet loading
const loadFormulaSheet = async () => {
    try {
        const response = await fetch('/api/formulas');
        const formulas = await response.json();
        const formulaContainer = document.querySelector('.formula-container');
        // Add formula content to DOM
    } catch (error) {
        console.error('Error loading formula sheet:', error);
    }
};

// Video tutorials loading
const loadVideos = async () => {
    try {
        const response = await fetch('/api/videos');
        const videos = await response.json();
        const videoContainer = document.querySelector('.video-container');
        // Add video content to DOM
    } catch (error) {
        console.error('Error loading video tutorials:', error);
    }
};

// Practice problems loading
const loadPracticeProblems = async () => {
    try {
        const response = await fetch('/api/practice');
        const problems = await response.json();
        const practiceContainer = document.querySelector('.practice-container');
        // Add practice problems to DOM
    } catch (error) {
        console.error('Error loading practice problems:', error);
    }
};

// Forum posts loading
const loadForumPosts = async () => {
    try {
        const response = await fetch('/api/forum');
        const posts = await response.json();
        const forumContainer = document.querySelector('.forum-container');
        // Add forum posts to DOM
    } catch (error) {
        console.error('Error loading forum posts:', error);
    }
}; 

function showSem(id) {
  // Hide all elements with class pdf-section
  document.querySelectorAll('.pdf-section').forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected one
  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }
}

