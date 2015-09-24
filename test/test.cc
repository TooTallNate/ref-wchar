#include <stdlib.h>
#include <wchar.h>
#include "nan.h"

using namespace node;

namespace {

static wchar_t w = L'w';
static wchar_t s[] = L"hello world";
static wchar_t **str = reinterpret_cast<wchar_t **>(&s);

void Initialize(v8::Handle<v8::Object> target) {
  Nan::HandleScope scope;

  Nan::Set(target, Nan::New<v8::String>("w").ToLocalChecked(), Nan::NewBuffer(reinterpret_cast<char *>(&w), sizeof(w)).ToLocalChecked());
  Nan::Set(target, Nan::New<v8::String>("s").ToLocalChecked(), Nan::NewBuffer(reinterpret_cast<char *>(&s), sizeof(s)).ToLocalChecked());
  Nan::Set(target, Nan::New<v8::String>("str").ToLocalChecked(), Nan::NewBuffer(reinterpret_cast<char *>(&str), sizeof(str)).ToLocalChecked());
}

} // anonymous namespace

NODE_MODULE(test, Initialize);
