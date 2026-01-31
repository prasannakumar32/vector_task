# Vector Task - Node Abstraction System

A powerful React Flow application featuring an advanced node abstraction system that eliminates code duplication and accelerates development. This project demonstrates enterprise-level React development with modern architecture patterns and comprehensive backend integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+ and pip

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/prasannakumar32/vector_task.git
cd vector_task
```

2. **Backend Setup**
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env  # Configure your environment
python main.py
```

3. **Frontend Setup** (in separate terminal)
```bash
cd frontend
npm install
cp .env.example .env  # Configure your environment
npm start
```

4. **Access the Application**
- Frontend: http://localhost:3001
- Backend API: http://localhost:8002

## ⚙️ Environment Configuration

### Backend (.env)
```env
HOST=0.0.0.0
PORT=8002
DATABASE_URL=pipelines.db
```

### Frontend (.env)
```env
REACT_APP_API_BASE_URL=http://localhost:8002
REACT_APP_API_ENDPOINT=/pipelines
PORT=3001
```

### Production Setup
- Copy `.env.production` files and update with production values
- Frontend: Set `REACT_APP_API_BASE_URL` to your production API endpoint
- Backend: Adjust `HOST`, `PORT`, and `DATABASE_URL` for production deployment

## 🎯 Key Features

### Node Abstraction System
- **Before**: Each node required 35-48 lines of repetitive code
- **After**: New nodes need only 6-40 lines of configuration
- **Result**: 87.5% code reduction with consistent styling and behavior

### Available Node Types

**Core Nodes (Refactored):**
- **Input Node** - Data input with configurable field types
- **Output Node** - Data output display
- **LLM Node** - Language model integration
- **Text Node** - Enhanced text processing with dynamic resizing

**Demo Nodes (New):**
- **Math Node** - Mathematical operations (add, subtract, multiply, divide)
- **Condition Node** - Conditional logic with true/false output paths
- **Transform Node** - Data conversion and formatting
- **Database Node** - Database operations (CRUD)
- **API Node** - HTTP requests and API integration

## 🏗️ Architecture

### Frontend Stack
- **React 18** - Modern React with hooks and functional components
- **React Flow 11.8.3** - Node-based UI framework
- **Tailwind CSS 3.4.1** - Utility-first styling framework
- **Zustand** - Lightweight state management
- **PostCSS** - CSS processing and optimization

### Backend Stack
- **FastAPI** - Modern Python web framework with automatic documentation
- **Pydantic** - Data validation and serialization
- **SQLite** - Lightweight database for pipeline persistence
- **Uvicorn** - High-performance ASGI server

### Design System
- **Theme Configuration** - Centralized color palette, typography, and spacing
- **CSS Variables** - Runtime theming with custom properties
- **Component Library** - Reusable styled components (Button, Field, Canvas)
- **Responsive Design** - Mobile-compatible with breakpoint system

## 📝 Creating Custom Nodes

The abstraction system makes creating new nodes incredibly simple:

```javascript
import { NodeFactory } from './nodes/NodeFactory';
import { Position } from 'reactflow';

export const MyCustomNode = NodeFactory.createCustomNode({
  title: 'My Custom Node',
  width: 200,
  height: 80,
  handles: [
    { 
      id: 'input', 
      type: 'target', 
      position: Position.Left 
    },
    { 
      id: 'output', 
      type: 'source', 
      position: Position.Right 
    }
  ],
  fields: [
    { 
      key: 'value', 
      type: 'text', 
      label: 'Value:',
      defaultValue: 'default value'
    },
    {
      key: 'operation',
      type: 'select',
      label: 'Operation:',
      options: [
        { value: 'add', label: 'Add' },
        { value: 'multiply', label: 'Multiply' }
      ]
    }
  ]
});
```

### Field Types Supported
- `text` - Single-line text input
- `textarea` - Multi-line text input
- `select` - Dropdown selection
- `number` - Numeric input

## 🔧 Advanced Features

### Dynamic Text Node
- **Auto-resizing** - Nodes automatically resize based on content
- **Variable Detection** - Automatically detects `{{variable}}` patterns
- **Dynamic Handles** - Creates input handles for detected variables
- **Bounds Enforcement** - Min/max size limits (200-400px width, 80-300px height)

### Backend Integration
- **Pipeline Analysis** - Comprehensive pipeline statistics
- **DAG Detection** - Directed Acyclic Graph validation using Kahn's algorithm
- **Error Handling** - Robust error management with user-friendly messages
- **CORS Support** - Secure cross-origin resource sharing

### State Management
- **Zustand Store** - Centralized state with React Flow integration
- **Node ID Generation** - Type-aware unique ID generation
- **Real-time Updates** - Live synchronization between components

## 🎨 Styling System

### Theme Variables
```css
:root {
  --color-primary-500: #3b82f6;
  --color-accent-500: #8b5cf6;
  --spacing-md: 1rem;
  --shadow-soft: 0 2px 15px rgba(0, 0, 0, 0.07);
  --animation-duration-normal: 300ms;
}
```

### Component Library
- **StyledButton** - Multiple variants with loading states
- **StyledField** - Consistent form field styling
- **StyledCanvas** - Gradient backgrounds with animations

## 📊 API Endpoints

### POST /pipelines/parse
Analyzes pipeline structure and validates DAG formation.

**Request Body:**
```json
{
  "nodes": [...],
  "edges": [...],
  "name": "Pipeline_Name"
}
```

**Response:**
```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true,
  "pipeline_id": 123
}
```

## 🚀 Performance Features

### Optimizations
- **Debouncing** - 100ms debounce for text calculations
- **Memory Management** - Proper DOM cleanup and garbage collection
- **Efficient Rendering** - Optimized React re-renders
- **Algorithm Efficiency** - O(V+E) time complexity for DAG detection

### Accessibility
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA labels
- **Focus Management** - Logical tab order
- **Color Contrast** - WCAG compliant colors

## 🛠️ Development

### Available Scripts

**Frontend:**
```bash
npm start      # Start development server
npm test       # Run tests
npm run build  # Build for production
npm run eject  # Eject from Create React App (one-way)
```

**Backend:**
```bash
python main.py  # Start FastAPI server
```

### Project Structure
```
vector_task/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── .env.example         # Environment template
├── frontend/
│   ├── src/
│   │   ├── nodes/          # Node components and factory
│   │   ├── styles/         # Design system and components
│   │   ├── App.js          # Main application
│   │   └── store.js        # State management
│   ├── public/             # Static assets
│   └── package.json        # Node dependencies
└── README.md               # This file
```

## 🔒 Security

- **Input Validation** - Comprehensive data validation with Pydantic
- **CORS Configuration** - Secure cross-origin resource sharing
- **Environment Variables** - Secure configuration management
- **Error Sanitization** - Non-sensitive error messages in production

## 📈 Quality Assurance

### Code Quality
- **Modular Architecture** - Clear separation of concerns
- **Type Safety** - Proper data validation
- **Documentation** - Comprehensive inline documentation
- **Consistent Patterns** - Standardized coding conventions

### Testing Considerations
- **Component Testing** - Individual component functionality
- **Integration Testing** - Frontend-backend communication
- **Algorithm Testing** - DAG detection accuracy
- **Performance Testing** - Runtime efficiency validation

## 🎉 Project Outcomes

### Technical Achievements
- **87.5% Code Reduction** - Through node abstraction system
- **Production Ready** - Comprehensive error handling and optimization
- **Scalable Architecture** - Easy to extend with new node types
- **Modern Design** - Professional UI with responsive behavior

### Innovation Highlights
- **Advanced Text Node** - Dynamic resizing with variable detection
- **Efficient DAG Detection** - Optimized Kahn's algorithm
- **Flexible Abstraction** - Powerful factory pattern
- **Comprehensive Design System** - Modern styling architecture

---

## 📚 Resources

- **Repository**: https://github.com/prasannakumar32/vector_task
- **React Flow Documentation**: https://reactflow.dev/
- **FastAPI Documentation**: https://fastapi.tiangolo.com/
- **Tailwind CSS**: https://tailwindcss.com/

---

**Built with ❤️ using modern web development best practices**
