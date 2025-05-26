import { PlusCircle, Trash2, Pencil, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcn/card";
import { Input } from "../shadcn/input";
import { Button } from "../shadcn/button";
import { Checkbox } from "../shadcn/checkbox";
import { useState, useRef, useEffect } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoText, setNewTodoText] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const editInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (editingId !== null) {
            editInputRef.current?.focus();
        }
    }, [editingId]);

    const addTodo = () => {
        if (newTodoText.trim() === "") return;

        const newTodo: Todo = {
            id: Date.now(),
            text: newTodoText.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setNewTodoText("");
        inputRef.current?.focus();
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEditing = (id: number, text: string) => {
        setEditingId(id);
        setEditText(text);
    };

    const saveEdit = () => {
        if (editingId === null) return;

        if (editText.trim() === "") {
            deleteTodo(editingId);
        } else {
            setTodos(
                todos.map(todo =>
                    todo.id === editingId ? { ...todo, text: editText.trim() } : todo
                )
            );
        }

        setEditingId(null);
        setEditText("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            addTodo();
        }
    };

    const handleEditKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            saveEdit();
        } else if (e.key === "Escape") {
            setEditingId(null);
            setEditText("");
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    My Todo List
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-2 mb-4">
                    <Input
                        ref={inputRef}
                        placeholder="Add a new todo..."
                        className="flex-1"
                        value={newTodoText}
                        onChange={(e) => setNewTodoText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <Button
                        size="icon"
                        className="cursor-pointer"
                        onClick={addTodo}
                        disabled={newTodoText.trim() === ""}
                    >
                        <PlusCircle className="h-4 w-4" />
                    </Button>
                </div>

                {todos.length === 0 ? (
                    <div className="text-center text-slate-500 py-4">
                        No todos yet. Add one above!
                    </div>
                ) : (
                    <div className="space-y-2">
                        {todos.map((todo) => (
                            <div
                                key={todo.id}
                                className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50"
                            >
                                <Checkbox
                                    id={`todo-${todo.id}`}
                                    checked={todo.completed}
                                    onCheckedChange={() => toggleTodo(todo.id)}
                                    className="cursor-pointer"
                                    disabled={editingId === todo.id}
                                />

                                {editingId === todo.id ? (
                                    <Input
                                        ref={editInputRef}
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        onKeyDown={handleEditKeyDown}
                                        className="flex-1 h-8 py-1"
                                        autoFocus
                                    />
                                ) : (
                                    <label
                                        htmlFor={`todo-${todo.id}`}
                                        className={`flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${todo.completed ? "line-through text-slate-400" : ""}`}
                                    >
                                        {todo.text}
                                    </label>
                                )}

                                {editingId === todo.id ? (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 px-2 cursor-pointer"
                                        onClick={saveEdit}
                                    >
                                        <Check className="h-4 w-4" />
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-2 cursor-pointer"
                                            onClick={() => startEditing(todo.id, todo.text)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-2 cursor-pointer"
                                            onClick={() => deleteTodo(todo.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-4 text-sm text-slate-500 text-right">
                    {todos.filter(t => !t.completed).length} items remaining
                </div>
            </CardContent>
        </Card>
    );
}