import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Scissors,
  Copy,
  Clipboard,
  Superscript,
  Subscript,
  Image,
} from "lucide-react";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  const applyStyle = (style: string) => {
    document.execCommand(style, false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.execCommand("insertImage", false, e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>About Opportunity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("bold")}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("italic")}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("underline")}
            >
              <Underline className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("strikeThrough")}
            >
              <Strikethrough className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("justifyLeft")}
            >
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("justifyCenter")}
            >
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("justifyRight")}
            >
              <AlignRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("justifyFull")}
            >
              <AlignJustify className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("insertUnorderedList")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("insertOrderedList")}
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("cut")}
            >
              <Scissors className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("copy")}
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("paste")}
            >
              <Clipboard className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("superscript")}
            >
              <Superscript className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => applyStyle("subscript")}
            >
              <Subscript className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" asChild>
              <label>
                <Image className="h-4 w-4" />
                <Input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </Button>
          </div>
          <div
            className="min-h-[200px] border rounded-md p-2"
            contentEditable
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
            dangerouslySetInnerHTML={{
              __html: `
                <p>This field helps you to mention the details of the opportunity you are listing. It is better to include Rules, Eligibility, Process, Format, etc., in order to get the opportunity approved. The more details, the better!</p>
                <p><strong>Guidelines:</strong></p>
                <ul>
                  <li>Mention all the guidelines like eligibility, format, etc.</li>
                  <li>Inter-college team members allowed or not.</li>
                  <li>Inter-specialization team members allowed or not.</li>
                  <li>The number of questions/ problem statements.</li>
                  <li>Duration of the rounds.</li>
                </ul>
                <p><strong>Rules:</strong></p>
                <ul>
                  <li>Mention the rules of the competition.</li>
                </ul>
              `,
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Additional Details</h1>
      <div className="space-y-6">
        
        {/* Short Description */}
        {/* <div>
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Short Description
          </label>
          <Textarea
            id="shortDescription"
            placeholder="Provide a brief description of your opportunity"
            style={{ height: "200px", width: "950px" }} // Adjust height and width as needed
          />
        </div> */}
        <RichTextEditor />
      </div>
    </div>
  );
}
