# Repository Structure

```
copilot-template/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── 000_agent.md                          # BOOTSTRAP: Repository initialization & agent customization
│   │   ├── architect_product_manager.md          # Strategic planning & system architecture
│   │   ├── planner_agent.md                      # Project coordination & execution planning
│   │   ├── design_spec_writer_agent.md           # Technical design specifications
│   │   ├── user_story_writer_agent.md            # User story creation & prioritization
│   │   ├── data_analyst_agent.md                 # Analytics & performance insights
│   │   ├── designer_agent.md                     # UI/UX design & user experience
│   │   ├── developer_bug_fix.md                  # Bug investigation & resolution
│   │   ├── developer_code_refactoring.md         # Code quality & technical debt
│   │   ├── developer_feature_implementation.md   # New feature development
│   │   ├── devops_engineer_agent.md              # Infrastructure & deployment
│   │   ├── historian_technical_writer.md         # Documentation & knowledge management
│   │   ├── qa_tester_agent.md                    # Quality assurance & testing
│   │   └── security_guardian_agent.md            # Security analysis & compliance
│   └── Grounding/                                 # Project-specific context documents
│       ├── technology.md                         # Technology stack specifications
│       ├── architecture.md                       # System architecture context
│       ├── business-requirements.md              # Business domain context
│       ├── standards.md                          # Development standards & quality gates
│       └── [other-context].md                    # Additional project context
├── README.md                                      # Main repository documentation
└── .git/                                          # Git repository metadata
```

## Template Evolution History

- **Initial Commit (17a664a)**: "init copilots" - Created comprehensive set of 10 specialized agent templates
- **Repository Creation**: August 18, 2025 - Established agentic development template structure

## Agent Template Overview

### Core Philosophy
Each agent template is designed around the principle of **specialized expertise with collaborative integration**. Every template includes:

- **Clear role definition** and scope of responsibilities
- **Comprehensive workflow processes** for systematic approach
- **Detailed deliverable specifications** with quality criteria
- **Collaboration guidelines** for working with other agents
- **Success criteria** and measurement frameworks
- **Request information checklists** for efficient requirement gathering

### Template Categories (The Friends Cast)

#### **Bootstrap & Meta Agents**
- **Bootstrap Agent (000)**: Repository initialization, agent customization, technology integration *(Unchanged - maintains technical grounding)*

#### **Strategic & Planning Friends** 🦕📋
- **Ross Geller (Architect-PM)**: Deep expertise bridging business needs and technical implementation
- **Monica Geller (Planner)**: Obsessive-compulsive project coordination and resource planning
- **Ross Geller (Design Spec Writer)**: Academic precision in technical specifications and system documentation
- **Rachel Green (User Story Writer)**: Empathetic requirements translation and implementation prioritization

#### **Creative & Implementation Friends** 👗🎭
- **Rachel Green (Designer)**: Fashion-forward user experience and interface design
- **Joey Tribbiani (Feature Developer)**: Collaborative feature development with team-first approach
- **Mike Hannigan (DevOps)**: Adaptive infrastructure integration and deployment automation

#### **Quality & Security Friends** 🎭🌿
- **Joey Tribbiani (QA Tester)**: User-empathy focused testing and quality assurance
- **Phoebe Buffay (Security Guardian)**: Unconventional security analysis and intuitive threat mitigation

#### **Analysis & Support Friends** 📊🌿
- **Chandler Bing (Data Analyst)**: Statistical analysis and data reconfiguration with humor
- **Monica Geller (Code Refactoring)**: Perfectionist code cleaning and technical debt elimination  
- **Chandler Bing (Bug Fix)**: Sarcastic debugging and intelligent problem-solving
- **Phoebe Buffay (Technical Writer)**: Authentic documentation and unconventional knowledge management

## Usage Patterns

### **Repository Initialization Pattern (Getting the Gang Together)**
0. Add project-specific documents to `.github/Grounding/` directory
1. Create Bootstrap Agent issue to customize all agents for project technology
2. Start with **Ross (Architect-PM)** for strategic planning with deep expertise
3. Use **Monica (Planner)** for obsessively organized project coordination  
4. Apply **Ross (Design Spec Writer)** for academically precise technical specifications
5. Engage **Rachel (User Story Writer)** for empathetic implementation backlog
6. Move to **Rachel (Designer)** for style-focused user experience design
7. Proceed to **Joey (Feature Developer)** for collaborative implementation
8. Engage **Phoebe (Security Guardian)** for unconventional security validation
9. Use **Mike (DevOps)** for seamless infrastructure integration
10. Apply **Joey (QA Tester)** for user-empathy focused testing
11. Implement **Chandler (Data Analyst)** for witty metrics and monitoring
12. Conclude with **Phoebe (Technical Writer)** for authentic documentation

### **Maintenance Pattern (The Gang Maintains the Code)**
1. Use **Chandler (Data Analyst)** to identify issues with statistical analysis
2. Apply appropriate **Monica (Refactoring)** or **Chandler (Bug Fix)** for code improvements
3. Engage **Phoebe (Security Guardian)** for intuitive security impact assessment
4. Use **Joey (QA Tester)** for people-focused validation
5. Apply **Mike (DevOps)** for adaptive deployment
6. Update documentation via **Phoebe (Technical Writer)** with unconventional insights

### **Bug Resolution Pattern (Friends Fix Everything Together)**
1. Start with **Chandler (Bug Fix)** for sarcastic but effective debugging
2. Coordinate with **Joey (QA Tester)** for empathetic user testing
3. Engage **Phoebe (Security Guardian)** if security implications exist
4. Use **Mike (DevOps)** for seamless deployment and monitoring
5. Document resolution via **Phoebe (Technical Writer)** with authentic storytelling

## Customization Guidelines

### **For Different Project Types**
- **Web Applications**: Use all agents with emphasis on Designer and DevOps
- **APIs/Backend Services**: Focus on Developer, Security Guardian, and Data Analyst
- **Mobile Applications**: Emphasize Designer, QA Tester, and DevOps
- **Data Projects**: Prioritize Data Analyst, Security Guardian, and Historian-Writer

### **For Team Sizes**
- **Individual/Small Teams**: One person may handle multiple agent roles
- **Medium Teams**: 2-3 people may share agent responsibilities
- **Large Teams**: Dedicated specialists for each agent role

## Best Practices (Friends Style)

1. **Always start with Ross (Architect-PM)** for any significant work - he has the expertise!
2. **Use Monica (Planner)** to organize everything perfectly (with backup plans for backup plans)
3. **Let Rachel (Designer/User Stories)** bring empathy and style to user-focused decisions
4. **Call Chandler (Data/Bugs)** for analytical problem-solving with a side of humor
5. **Trust Joey (QA/Features)** for collaborative development and user empathy
6. **Ask Phoebe (Security/Docs)** for unconventional insights that others might miss
7. **Depend on Mike (DevOps)** to make all the technical pieces work together seamlessly
6. **Maintain quality** through QA Tester processes

## Future Enhancements

The template is designed to evolve and may include:
- **Agent context grounding** in the `.github/Grounding/` directory
- **Workflow automation** through GitHub Actions
- **Advanced collaboration patterns** between agents
- **Metrics and KPI tracking** for agent effectiveness
- **Template versioning** and upgrade paths
