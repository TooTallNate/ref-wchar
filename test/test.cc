#include <stdlib.h>
#include <wchar.h>
#include "nan.h"

using namespace node;

namespace {

static wchar_t w = L'w';
static wchar_t s[] = L"hello world";
static wchar_t **str = reinterpret_cast<wchar_t **>(&s);

void Initialize(v8::Handle<v8::Object> target) {
  NanScope();

  target->Set(NanNew<v8::String>("w"), NanBufferUse(reinterpret_cast<char *>(&w), sizeof(w)));
  target->Set(NanNew<v8::String>("s"), NanBufferUse(reinterpret_cast<char *>(&s), sizeof(s)));
  target->Set(NanNew<v8::String>("str"), NanBufferUse(reinterpret_cast<char *>(&str), sizeof(str)));
}

} // anonymous namespace

NODE_MODULE(test, Initialize);
