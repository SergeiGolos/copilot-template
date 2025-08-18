# GitHub Copilot Instructions for Copilot Template

## Project Context
- **Technology Stack**: React 18 + TypeScript, Node.js + Express, PostgreSQL + Prisma, AWS Infrastructure
- **Architecture Pattern**: Microservices with API Gateway and Event-driven messaging
- **Development Methodology**: Agentic Development with specialized AI agents for different concerns
- **Team Size**: Scalable template designed for small to large development teams

## Coding Standards & Patterns

### TypeScript/JavaScript Standards
- Use TypeScript strict mode with `noImplicitAny` and `strictNullChecks` enabled
- Prefer functional programming patterns with immutable data structures
- Use async/await over Promises.then() for better readability
- Implement comprehensive error handling with custom error classes
- Use meaningful variable and function names following camelCase convention
- Prefer const over let, avoid var entirely
- Use template literals for string interpolation
- Implement proper JSDoc documentation for public APIs

### React Patterns
- Use functional components with hooks exclusively
- Implement proper prop typing with TypeScript interfaces
- Use React Query (@tanstack/react-query) for server state management
- Use Zustand for global client state management
- Implement proper error boundaries for error handling
- Follow component composition patterns over inheritance
- Use custom hooks for reusable stateful logic
- Implement proper memoization with useMemo and useCallback when needed

### API Development Patterns
- Follow RESTful API design principles with proper HTTP methods
- Implement consistent HTTP status codes (200, 201, 400, 401, 403, 404, 500)
- Use middleware for cross-cutting concerns (authentication, validation, logging)
- Implement request/response logging with correlation IDs
- Use OpenAPI 3.0 specifications for API documentation
- Implement proper API versioning (v1, v2) in URL paths
- Use consistent error response format across all endpoints
- Implement rate limiting and request throttling

### Database Patterns
- Use Prisma ORM with proper schema design following database normalization
- Implement proper indexing strategies for query performance
- Use database transactions for data consistency in multi-step operations
- Implement proper error handling for database operations with retry logic
- Use connection pooling for optimal performance
- Follow migration-first approach for schema changes
- Use soft deletes for audit trail requirements
- Implement proper data validation at both application and database levels

## Architecture Guidelines

### File Organization
```
src/
├── components/          # Reusable UI components
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── services/           # API and business logic
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants
└── __tests__/          # Test files
```

### Testing Patterns
- Write unit tests for all business logic functions
- Use React Testing Library for component tests
- Implement integration tests for API endpoints using Supertest
- Use Playwright for end-to-end testing
- Follow test-driven development (TDD) for complex business logic
- Maintain minimum 80% test coverage for critical components
- Use test fixtures and factories for consistent test data
- Mock external dependencies in unit tests

### Security Patterns
- Validate all user inputs on server side using Zod or Joi
- Use parameterized queries to prevent SQL injection attacks
- Implement proper authentication using JWT with short expiry times
- Use RBAC (Role-Based Access Control) for authorization
- Sanitize data before rendering to prevent XSS attacks
- Use HTTPS for all communications in production
- Implement CSRF protection for state-changing operations
- Store sensitive data using environment variables, never in code

## Business Domain Context
- **Primary Users**: Development teams implementing agentic AI workflows
- **Core Features**: 
  - Specialized AI agent templates for different development concerns
  - Project bootstrapping and customization system
  - Comprehensive documentation and knowledge management
  - Quality assurance and testing frameworks
- **Business Rules**: 
  - All agents must maintain consistent project context
  - Quality gates must be enforced at all development stages
  - Security and compliance requirements must be integrated
- **Compliance Requirements**: Follow GDPR for data protection, implement SOC 2 controls

## Performance Considerations
- Implement code splitting using React.lazy() for route-based components
- Use lazy loading for non-critical components and images
- Optimize database queries with proper indexing and query analysis
- Implement multi-level caching (Redis for application, CDN for static assets)
- Monitor and optimize Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Use compression middleware (gzip/brotli) for API responses
- Implement proper pagination for large data sets
- Use database connection pooling and query optimization

## Integration Patterns
- Use consistent error handling middleware across all services
- Implement structured logging with correlation IDs for request tracing
- Use environment-specific configurations with proper validation
- Implement proper API versioning strategy
- Use event-driven architecture for service communication
- Implement circuit breaker pattern for external service calls
- Use retry logic with exponential backoff for transient failures

## Prohibited Patterns
- Never use 'any' type in TypeScript - use proper typing or unknown
- Don't use inline styles in React components - use CSS modules or styled-components
- Avoid direct DOM manipulation in React components
- Don't store sensitive data (passwords, tokens) in localStorage
- Avoid blocking synchronous operations in async functions
- Don't ignore TypeScript compiler warnings
- Avoid using index as key in React lists unless items are static
- Don't use var keyword - use const or let appropriately

## Preferred Libraries & Tools
- **State Management**: Zustand for global state, React Query for server state
- **Styling**: Tailwind CSS with custom design system
- **Testing**: Jest for unit tests, React Testing Library, Playwright for E2E
- **Validation**: Zod for runtime schema validation
- **HTTP Client**: Axios with interceptors for authentication and error handling
- **Date Handling**: date-fns (tree-shakeable) over moment.js
- **Utilities**: Lodash with individual imports, not entire library
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Heroicons or React Icons for consistent iconography

## Code Review Guidelines
- Verify business logic correctness and edge case handling
- Ensure comprehensive error handling and user feedback
- Check test coverage for new features (minimum 80% for critical paths)
- Validate security patterns and input sanitization
- Review performance implications of new code
- Ensure accessibility compliance (WCAG 2.1 AA)
- Verify proper TypeScript typing without any usage
- Check for proper documentation and code comments

## Common Code Snippets

### API Endpoint Template
```typescript
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { authenticate, authorize } from '../middleware/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const requestSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  // Add other validation rules
});

export const createResource = [
  authenticate,
  authorize(['admin', 'user']),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = requestSchema.parse(req.body);
      
      const result = await prisma.resource.create({
        data: {
          ...validatedData,
          createdAt: new Date(),
        },
      });
      
      res.status(201).json({ 
        success: true, 
        data: result,
        message: 'Resource created successfully'
      });
    } catch (error) {
      next(error);
    }
  }
];
```

### React Component Template
```tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

interface ComponentProps {
  id: string;
  onUpdate?: (data: any) => void;
  className?: string;
}

const DataSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
});

export const ResourceComponent: React.FC<ComponentProps> = ({ 
  id, 
  onUpdate, 
  className = '' 
}) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['resource', id],
    queryFn: async () => {
      const response = await fetch(`/api/resources/${id}`);
      if (!response.ok) throw new Error('Failed to fetch resource');
      const json = await response.json();
      return DataSchema.parse(json.data);
    },
    enabled: !!id,
  });

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded">
        <p className="text-red-800">Error loading resource</p>
        <button 
          onClick={() => refetch()}
          className="mt-2 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`resource-component ${className}`}>
      <h3 className="text-lg font-semibold">{data?.name}</h3>
      <p className="text-gray-600">Created: {data?.createdAt}</p>
      {onUpdate && (
        <button 
          onClick={() => onUpdate(data)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Resource
        </button>
      )}
    </div>
  );
};
```

### Custom Hook Template
```typescript
import { useState, useEffect } from 'react';
import { z } from 'zod';

const ConfigSchema = z.object({
  apiUrl: z.string().url(),
  timeout: z.number().positive(),
});

type Config = z.infer<typeof ConfigSchema>;

export const useApiConfig = () => {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/config');
        if (!response.ok) throw new Error('Failed to fetch config');
        
        const data = await response.json();
        const validatedConfig = ConfigSchema.parse(data);
        
        setConfig(validatedConfig);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error, refetch: () => fetchConfig() };
};
```

### Database Service Template
```typescript
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  role: z.enum(['admin', 'user', 'viewer']),
});

export class UserService {
  static async createUser(data: z.infer<typeof CreateUserSchema>) {
    try {
      const validatedData = CreateUserSchema.parse(data);
      
      const user = await prisma.user.create({
        data: {
          ...validatedData,
          createdAt: new Date(),
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      });
      
      return { success: true, data: user };
    } catch (error) {
      console.error('UserService.createUser error:', error);
      throw new Error('Failed to create user');
    }
  }

  static async getUserById(id: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      
      if (!user) {
        throw new Error('User not found');
      }
      
      return { success: true, data: user };
    } catch (error) {
      console.error('UserService.getUserById error:', error);
      throw error;
    }
  }
}
```

## Environment-Specific Notes
- **Development**: Use detailed logging, enable React DevTools, use development database
- **Staging**: Mirror production configuration, use staging database, enable performance monitoring
- **Production**: Minimal logging for performance, enable all security headers, use production database with backups

## Agent-Specific Patterns

### When working on Bootstrap Agent tasks:
- Always read grounding documents first before making changes
- Update ALL agent templates consistently
- Create comprehensive copilot-instructions.md
- Validate all customizations against actual codebase

### When working on Developer Agent tasks:
- Follow TDD approach for new features
- Implement comprehensive error handling
- Write tests before implementation
- Use proper TypeScript typing

### When working on Security Guardian tasks:
- Validate all inputs and outputs
- Implement proper authentication/authorization
- Use security-first patterns
- Document security decisions

Remember to update these instructions as the project evolves and new patterns emerge. The Bootstrap Agent should refresh this file whenever grounding documents are updated.
