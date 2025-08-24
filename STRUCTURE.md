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

### Template Categories

#### **Bootstrap & Meta Agents**
- **Bootstrap Agent (000)**: Repository initialization, agent customization, technology integration

#### **Strategic & Planning Agents**
- **Captain Benjamin Sisko**: Strategic leadership bridging business and technical implementation
- **Major Kira Nerys**: Project coordination with primary stakeholder advocacy and user focus
- **Lt. Commander Jadzia Dax**: Technical specifications with polymath expertise and system documentation  
- **Jake Sisko**: Requirements translation through empathetic storytelling and user narratives

#### **Implementation Agents**
- **Deep Space Nine Developer Corps (3 specialists)**: Dr. Bashir (features), Nog (bugs), Rom (refactoring)
- **Leeta**: User experience and interface design with hospitality focus
- **Chief Miles O'Brien**: Infrastructure management and deployment automation

#### **Quality & Security Agents**
- **Constable Odo**: Comprehensive testing and quality assurance with shapeshifter precision
- **Lt. Commander Worf**: Security analysis and threat mitigation with Klingon discipline

#### **Analysis & Documentation Agents**
- **Quark**: Performance monitoring and business intelligence with profit-driven insights
- **Professor Jennifer Sisko**: Documentation and knowledge management with academic excellence

## Usage Patterns

### **Repository Initialization Pattern**
0. Add project-specific documents to `.github/Grounding/` directory
1. Create Bootstrap Agent issue to customize all agents for project technology
2. Start with Captain Sisko for strategic planning and architectural vision
3. Use Major Kira for project coordination and stakeholder advocacy
4. Apply Lt. Commander Dax for detailed technical specifications
5. Engage Jake Sisko for user story creation and implementation backlog
6. Move to Leeta for UX/UI requirements and user experience design
7. Proceed to DS9 Developer Corps (Bashir, Nog, or Rom) for implementation
8. Engage Lt. Commander Worf for security validation and compliance
9. Use Chief O'Brien for deployment and infrastructure management
10. Apply Constable Odo for comprehensive testing and quality assurance
11. Implement Quark for metrics, monitoring, and business intelligence
12. Conclude with Professor Jennifer Sisko for comprehensive documentation

### **Maintenance Pattern**
1. Use Quark to identify performance issues or profit opportunities
2. Apply appropriate DS9 Developer (Bashir for features, Nog for bugs, Rom for refactoring)
3. Engage Lt. Commander Worf for security impact assessment
4. Use Constable Odo for thorough validation and testing
5. Apply Chief O'Brien for deployment and operational excellence
6. Update documentation via Professor Jennifer Sisko

### **Bug Resolution Pattern**
1. Start with Nog for systematic bug investigation and root cause analysis
2. Coordinate with Constable Odo for comprehensive testing and validation
3. Engage Lt. Commander Worf if security implications exist
4. Use Chief O'Brien for deployment and operational monitoring
5. Document resolution via Professor Jennifer Sisko

## Customization Guidelines

### **For Different Project Types**
- **Web Applications**: Use all agents with emphasis on Leeta and Chief O'Brien
- **APIs/Backend Services**: Focus on DS9 Developer Corps, Lt. Commander Worf, and Quark  
- **Mobile Applications**: Emphasize Leeta, Constable Odo, and Chief O'Brien
- **Data Projects**: Prioritize Quark, Lt. Commander Worf, and Professor Jennifer Sisko

### **For Team Sizes**
- **Individual/Small Teams**: One person may handle multiple agent roles
- **Medium Teams**: 2-3 people may share agent responsibilities
- **Large Teams**: Dedicated specialists for each agent role

## Best Practices

1. **Always start with Captain Sisko** for strategic vision and architectural planning
2. **Use appropriate DS9 Developer specialist** (Bashir for features, Nog for bugs, Rom for refactoring)
3. **Engage Lt. Commander Worf early** for security-sensitive features and compliance
4. **Document everything** through Professor Jennifer Sisko's academic excellence
5. **Measure success** using Quark's profit-driven analytics and business intelligence  
6. **Maintain quality** through Constable Odo's incorruptible testing processes

## Future Enhancements

The template is designed to evolve and may include:
- **Agent context grounding** in the `.github/Grounding/` directory
- **Workflow automation** through GitHub Actions
- **Advanced collaboration patterns** between agents
- **Metrics and KPI tracking** for agent effectiveness
- **Template versioning** and upgrade paths
